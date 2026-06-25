const ANDROID_BED_GAIN = 0.022;
const PULSE_GAIN = 0.012;

export interface PriestVoiceBedHandle {
  stop: (when?: number) => void;
}

export function createPriestVoiceAudioBus(context: AudioContext): AudioNode {
  const inputGain = context.createGain();

  inputGain.gain.value = 0.92;

  const lowpass = context.createBiquadFilter();

  lowpass.type = 'lowpass';
  lowpass.frequency.value = 4800;
  lowpass.Q.value = 0.65;

  const delay = context.createDelay();

  delay.delayTime.value = 0.24;

  const feedback = context.createGain();

  feedback.gain.value = 0.26;

  const wetGain = context.createGain();

  wetGain.gain.value = 0.18;

  inputGain.connect(lowpass);
  lowpass.connect(delay);
  delay.connect(feedback);
  feedback.connect(delay);
  delay.connect(wetGain);
  wetGain.connect(context.destination);
  lowpass.connect(context.destination);

  return inputGain;
}

export function startPriestVoiceBed(context: AudioContext, destination: AudioNode): PriestVoiceBedHandle {
  const startTime = context.currentTime;
  const bedGain = context.createGain();
  const oscillators: OscillatorNode[] = [];

  bedGain.gain.setValueAtTime(0.0001, startTime);
  bedGain.gain.exponentialRampToValueAtTime(ANDROID_BED_GAIN, startTime + 0.2);
  bedGain.connect(destination);

  const bedTones = [
    { frequency: 55, type: 'sine' as OscillatorType, gain: 1 },
    { frequency: 110, type: 'sine' as OscillatorType, gain: 0.35 },
    { frequency: 880, type: 'sine' as OscillatorType, gain: 0.06 },
  ];

  for (const tone of bedTones) {
    const oscillator = context.createOscillator();
    const toneGain = context.createGain();

    oscillator.type = tone.type;
    oscillator.frequency.setValueAtTime(tone.frequency, startTime);
    toneGain.gain.value = tone.gain;
    oscillator.connect(toneGain);
    toneGain.connect(bedGain);
    oscillator.start(startTime);
    oscillators.push(oscillator);
  }

  const pulse = context.createOscillator();
  const pulseGain = context.createGain();

  pulse.type = 'sine';
  pulse.frequency.setValueAtTime(0.18, startTime);
  pulseGain.gain.setValueAtTime(PULSE_GAIN, startTime);
  pulse.connect(pulseGain);
  pulseGain.connect(bedGain.gain);
  pulse.start(startTime);
  oscillators.push(pulse);

  return {
    stop: (when = context.currentTime) => {
      bedGain.gain.cancelScheduledValues(when);
      bedGain.gain.setValueAtTime(bedGain.gain.value, when);
      bedGain.gain.exponentialRampToValueAtTime(0.0001, when + 0.35);

      for (const oscillator of oscillators) {
        oscillator.stop(when + 0.4);
      }
    },
  };
}

export function schedulePriestDigitalTick(
  context: AudioContext,
  destination: AudioNode,
  startTime = context.currentTime
): void {
  scheduleTickTone(context, destination, 660, 'sine', 0.04, startTime);
  scheduleTickTone(context, destination, 990, 'sine', 0.022, startTime + 0.016);
}

function scheduleTickTone(
  context: AudioContext,
  destination: AudioNode,
  frequency: number,
  type: OscillatorType,
  gain: number,
  startTime: number
): void {
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);
  gainNode.gain.setValueAtTime(0.0001, startTime);
  gainNode.gain.exponentialRampToValueAtTime(Math.max(gain, 0.0002), startTime + 0.006);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.08);
  oscillator.connect(gainNode);
  gainNode.connect(destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + 0.09);
}
