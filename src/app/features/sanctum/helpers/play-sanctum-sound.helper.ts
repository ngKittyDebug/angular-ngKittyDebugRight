import { SanctumSoundPhase } from '@features/sanctum/data/models/sanctum-sound-phase.model';

interface ToneSpec {
  frequency: number;
  duration: number;
  type?: OscillatorType;
  gain?: number;
  delay?: number;
}

const MASTER_GAIN = 0.1;

const PHASE_TONES = {
  [SanctumSoundPhase.RITUAL_START]: [
    { frequency: 196, duration: 1.1, type: 'triangle', gain: 0.09 },
    { frequency: 294, duration: 1.2, type: 'sine', gain: 0.06, delay: 0.08 },
  ],
  [SanctumSoundPhase.LITANY_TICK]: [{ frequency: 440, duration: 0.09, type: 'square', gain: 0.035 }],
  [SanctumSoundPhase.VERDICT_SACRED]: [
    { frequency: 262, duration: 1.4, type: 'sine', gain: 0.08 },
    { frequency: 392, duration: 1.5, type: 'sine', gain: 0.075, delay: 0.1 },
  ],
  [SanctumSoundPhase.VERDICT_HERETICAL]: [
    { frequency: 233, duration: 0.85, type: 'sawtooth', gain: 0.045 },
    { frequency: 311, duration: 0.7, type: 'square', gain: 0.03, delay: 0.2 },
  ],
  [SanctumSoundPhase.VERDICT_FORBIDDEN]: [
    { frequency: 98, duration: 1.1, type: 'sawtooth', gain: 0.07 },
    { frequency: 73, duration: 0.8, type: 'triangle', gain: 0.06, delay: 0.28 },
  ],
  [SanctumSoundPhase.PRIEST_RAGE]: [
    { frequency: 185, duration: 0.16, type: 'square', gain: 0.06 },
    { frequency: 140, duration: 0.2, type: 'triangle', gain: 0.045, delay: 0.05 },
  ],
} as const satisfies Record<SanctumSoundPhase, readonly ToneSpec[]>;

export function playSanctumSound(context: AudioContext, destination: AudioNode, phase: SanctumSoundPhase): void {
  const startTime = context.currentTime;

  for (const tone of PHASE_TONES[phase]) {
    scheduleTone(context, destination, tone, startTime);
  }
}

export function createSanctumAudioBus(context: AudioContext): AudioNode {
  const masterGain = context.createGain();

  masterGain.gain.value = 0.85;
  masterGain.connect(context.destination);

  return masterGain;
}

function scheduleTone(context: AudioContext, destination: AudioNode, tone: ToneSpec, startTime: number): void {
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  const toneStart = startTime + (tone.delay ?? 0);
  const toneGain = (tone.gain ?? 0.05) * MASTER_GAIN;

  oscillator.type = tone.type ?? 'sine';
  oscillator.frequency.setValueAtTime(tone.frequency, toneStart);
  gainNode.gain.setValueAtTime(0.0001, toneStart);
  gainNode.gain.exponentialRampToValueAtTime(Math.max(toneGain, 0.0002), toneStart + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, toneStart + tone.duration);
  oscillator.connect(gainNode);
  gainNode.connect(destination);
  oscillator.start(toneStart);
  oscillator.stop(toneStart + tone.duration + 0.05);
}
