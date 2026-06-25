import { SanctumSoundPhase } from '@features/sanctum/data/models/sanctum-sound-phase.model';

interface ToneSpec {
  frequency: number;
  duration: number;
  type?: OscillatorType;
  gain?: number;
  delay?: number;
  detune?: number;
}

const MASTER_GAIN = 0.1;

export function scheduleSanctumPhase(
  context: AudioContext,
  destination: AudioNode,
  phase: SanctumSoundPhase,
  startTime = context.currentTime
): void {
  const tones = resolvePhaseTones(phase);

  for (const tone of tones) {
    scheduleTone(context, destination, tone, startTime);
  }
}

function resolvePhaseTones(phase: SanctumSoundPhase): ToneSpec[] {
  switch (phase) {
    case SanctumSoundPhase.RITUAL_START:
      return [
        { frequency: 196, duration: 1.1, type: 'triangle', gain: 0.09 },
        { frequency: 247, duration: 1.1, type: 'sine', gain: 0.07, delay: 0.04 },
        { frequency: 294, duration: 1.2, type: 'sine', gain: 0.06, delay: 0.08 },
        { frequency: 392, duration: 0.35, type: 'square', gain: 0.025, delay: 0.95 },
      ];

    case SanctumSoundPhase.LITANY_TICK:
      return [
        { frequency: 440, duration: 0.09, type: 'square', gain: 0.035 },
        { frequency: 660, duration: 0.07, type: 'sine', gain: 0.02, delay: 0.03 },
      ];

    case SanctumSoundPhase.VERDICT_SACRED:
      return [
        { frequency: 262, duration: 1.4, type: 'sine', gain: 0.08 },
        { frequency: 330, duration: 1.4, type: 'triangle', gain: 0.07, delay: 0.05 },
        { frequency: 392, duration: 1.5, type: 'sine', gain: 0.075, delay: 0.1 },
        { frequency: 523, duration: 1.6, type: 'triangle', gain: 0.05, delay: 0.16 },
      ];

    case SanctumSoundPhase.VERDICT_HERETICAL:
      return [
        { frequency: 233, duration: 0.85, type: 'sawtooth', gain: 0.045 },
        { frequency: 247, duration: 0.85, type: 'triangle', gain: 0.04, delay: 0.06, detune: -8 },
        { frequency: 311, duration: 0.7, type: 'square', gain: 0.03, delay: 0.2 },
      ];

    case SanctumSoundPhase.VERDICT_FORBIDDEN:
      return [
        { frequency: 98, duration: 1.1, type: 'sawtooth', gain: 0.07 },
        { frequency: 103, duration: 1.1, type: 'square', gain: 0.05, detune: 14 },
        { frequency: 146, duration: 0.55, type: 'sawtooth', gain: 0.04, delay: 0.12 },
        { frequency: 73, duration: 0.8, type: 'triangle', gain: 0.06, delay: 0.28 },
      ];

    case SanctumSoundPhase.PRIEST_RAGE:
      return [
        { frequency: 185, duration: 0.16, type: 'square', gain: 0.06 },
        { frequency: 196, duration: 0.14, type: 'sawtooth', gain: 0.05, detune: 22 },
        { frequency: 140, duration: 0.2, type: 'triangle', gain: 0.045, delay: 0.05 },
      ];
  }
}

function scheduleTone(context: AudioContext, destination: AudioNode, tone: ToneSpec, startTime: number): void {
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  const toneStart = startTime + (tone.delay ?? 0);
  const toneGain = (tone.gain ?? 0.05) * MASTER_GAIN;

  oscillator.type = tone.type ?? 'sine';
  oscillator.frequency.setValueAtTime(tone.frequency, toneStart);

  if (tone.detune) {
    oscillator.detune.setValueAtTime(tone.detune, toneStart);
  }

  gainNode.gain.setValueAtTime(0.0001, toneStart);
  gainNode.gain.exponentialRampToValueAtTime(Math.max(toneGain, 0.0002), toneStart + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, toneStart + tone.duration);

  oscillator.connect(gainNode);
  gainNode.connect(destination);
  oscillator.start(toneStart);
  oscillator.stop(toneStart + tone.duration + 0.05);
}

export function createSanctumAudioBus(context: AudioContext): AudioNode {
  const masterGain = context.createGain();

  masterGain.gain.value = 0.85;

  const delay = context.createDelay();

  delay.delayTime.value = 0.22;

  const feedback = context.createGain();

  feedback.gain.value = 0.22;

  const wetGain = context.createGain();

  wetGain.gain.value = 0.35;

  masterGain.connect(delay);
  delay.connect(feedback);
  feedback.connect(delay);
  delay.connect(wetGain);
  wetGain.connect(context.destination);
  masterGain.connect(context.destination);

  return masterGain;
}
