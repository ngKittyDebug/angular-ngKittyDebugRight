import { inject, resource, Service, signal } from '@angular/core';
import { rxResource, toObservable } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@jsverse/transloco';
import { clampNumber } from '@shared/helpers/clamp-number.helper';
import { isPrefersReducedMotion } from '@shared/helpers/is-prefers-reduced-motion.helper';
import { DIGITAL_PRIEST_VOICES_READY_TIMEOUT_MS } from '@features/sanctum/ui/components/digital-priest/constants/digital-priest-voice.config';
import type { DigitalPriestMood } from '@features/sanctum/data/models/digital-priest-mood.model';
import type { DigitalPriestVoiceProfile } from '@features/sanctum/ui/components/digital-priest/data/models/digital-priest-voice-profile.model';
import {
  isVoiceMatchingLang,
  pickDigitalPriestVoice,
  resolveDigitalPriestLangTag,
} from '@features/sanctum/ui/components/digital-priest/helpers/pick-digital-priest-voice.helper';
import {
  createPriestVoiceAudioBus,
  type PriestVoiceBedHandle,
  schedulePriestDigitalTick,
  startPriestVoiceBed,
} from '@features/sanctum/ui/components/digital-priest/helpers/priest-voice-audio.helper';
import { randomJitter } from '@features/sanctum/ui/components/digital-priest/helpers/random-jitter.helper';
import { resolveDigitalPriestVoiceProfile } from '@features/sanctum/ui/components/digital-priest/helpers/resolve-digital-priest-voice-profile.helper';
import { EMPTY, filter, firstValueFrom, from, take } from 'rxjs';

interface SpeechRequest {
  text: string;
  mood: DigitalPriestMood;
  session: number;
  requestId: number;
}

@Service({
  autoProvided: false,
})
export class DigitalPriestVoiceService {
  private readonly translocoService = inject(TranslocoService);

  private audioContext: AudioContext | null = null;
  private audioDestination: AudioNode | null = null;
  private activeBed: PriestVoiceBedHandle | null = null;
  private speechSession = 0;
  private speechRequestId = 0;

  private readonly _speechRequest = signal<SpeechRequest | undefined>(undefined);

  public readonly voices = resource({
    loader: async () => {
      const synthesis = globalThis.speechSynthesis;

      if (!synthesis) {
        return [] as readonly SpeechSynthesisVoice[];
      }

      return waitForVoices(synthesis);
    },
  });

  public readonly speech = rxResource({
    params: () => this._speechRequest(),
    stream: ({ params }) => {
      if (!params) {
        return EMPTY;
      }

      return from(this.runSpeech(params));
    },
  });

  public speakQuote(quoteText: string, mood: DigitalPriestMood): Promise<void> {
    if (isPrefersReducedMotion()) {
      return Promise.resolve();
    }

    const text = quoteText.trim();

    if (!text) {
      return Promise.resolve();
    }

    return this.speak(text, mood);
  }

  public speak(text: string, mood: DigitalPriestMood): Promise<void> {
    const synthesis = globalThis.speechSynthesis;

    if (!synthesis || !text.trim()) {
      return Promise.resolve();
    }

    this.cancel();

    const session = this.speechSession;
    const requestId = this.speechRequestId + 1;

    this._speechRequest.set({
      text,
      mood,
      session,
      requestId,
    });

    return firstValueFrom(
      toObservable(this.speech.status).pipe(
        filter((status) => status === 'resolved' || status === 'error'),
        take(1)
      )
    ).then(() => undefined);
  }

  public cancel(): void {
    this.speechSession += 1;
    this.speechRequestId += 1;
    this._speechRequest.set(undefined);
    this.stopVoiceBed();
    globalThis.speechSynthesis?.cancel();
  }

  private async runSpeech(request: SpeechRequest): Promise<void> {
    const synthesis = globalThis.speechSynthesis;

    if (!synthesis || request.session !== this.speechSession) {
      return;
    }

    const activeLang = this.translocoService.getActiveLang();
    const profile = resolveDigitalPriestVoiceProfile(request.mood, activeLang);
    const voices = await this.resolveVoices();
    const context = await this.ensureAudioContext();

    if (request.session !== this.speechSession || !context || !this.audioDestination) {
      return;
    }

    const voice = pickDigitalPriestVoice(voices, activeLang);

    await this.speakUtterance(
      synthesis,
      request.text,
      voice,
      profile,
      request.session,
      context,
      this.audioDestination,
      activeLang
    );
  }

  private speakUtterance(
    synthesis: SpeechSynthesis,
    text: string,
    voice: SpeechSynthesisVoice | null,
    profile: DigitalPriestVoiceProfile,
    session: number,
    context: AudioContext,
    destination: AudioNode,
    activeLang: string
  ): Promise<void> {
    return new Promise((resolve) => {
      const finish = (): void => {
        if (session !== this.speechSession) {
          return;
        }

        this.stopVoiceBed();
        resolve();
      };

      this.startVoiceBed(context, destination);

      const utterance = this.createUtterance(text, voice, profile, activeLang);

      utterance.onend = () => {
        if (session !== this.speechSession) {
          return;
        }

        schedulePriestDigitalTick(context, destination);
        finish();
      };
      utterance.onerror = () => {
        finish();
      };
      synthesis.speak(utterance);
    });
  }

  private createUtterance(
    text: string,
    voice: SpeechSynthesisVoice | null,
    profile: DigitalPriestVoiceProfile,
    activeLang: string
  ): SpeechSynthesisUtterance {
    const utterance = new SpeechSynthesisUtterance(text);
    const matchedVoice = voice && isVoiceMatchingLang(voice, activeLang) ? voice : null;

    utterance.lang = resolveDigitalPriestLangTag(activeLang);
    utterance.voice = matchedVoice;
    utterance.pitch = clampNumber(profile.pitch + randomJitter(profile.pitchJitter), 0.5, 0.82);
    utterance.rate = clampNumber(profile.rate + randomJitter(profile.rateJitter), 0.84, 1.05);
    utterance.volume = profile.volume;

    return utterance;
  }

  private async ensureAudioContext(): Promise<AudioContext | null> {
    if (globalThis.AudioContext === undefined) {
      return null;
    }

    if (!this.audioContext) {
      this.audioContext = new AudioContext();
      this.audioDestination = createPriestVoiceAudioBus(this.audioContext);
    }

    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }

    return this.audioContext;
  }

  private startVoiceBed(context: AudioContext, destination: AudioNode): void {
    this.stopVoiceBed();
    this.activeBed = startPriestVoiceBed(context, destination);
  }

  private stopVoiceBed(): void {
    if (!this.activeBed || !this.audioContext) {
      this.activeBed = null;

      return;
    }

    this.activeBed.stop();
    this.activeBed = null;
  }

  private async resolveVoices(): Promise<readonly SpeechSynthesisVoice[]> {
    if (this.voices.status() === 'resolved') {
      return this.voices.value() ?? [];
    }

    await firstValueFrom(
      toObservable(this.voices.status).pipe(
        filter((status) => status === 'resolved' || status === 'error'),
        take(1)
      )
    );

    return this.voices.value() ?? [];
  }
}

function waitForVoices(synthesis: SpeechSynthesis): Promise<readonly SpeechSynthesisVoice[]> {
  const voices = synthesis.getVoices();

  if (voices.length) {
    return Promise.resolve(voices);
  }

  return new Promise((resolve) => {
    let settled = false;

    const finish = (): void => {
      if (settled) {
        return;
      }

      settled = true;
      synthesis.removeEventListener('voiceschanged', finish);
      resolve(synthesis.getVoices());
    };

    synthesis.addEventListener('voiceschanged', finish);
    globalThis.setTimeout(finish, DIGITAL_PRIEST_VOICES_READY_TIMEOUT_MS);
  });
}
