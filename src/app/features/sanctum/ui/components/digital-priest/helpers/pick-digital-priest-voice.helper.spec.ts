import { pickDigitalPriestVoice } from './pick-digital-priest-voice.helper';

describe('pickDigitalPriestVoice', () => {
  it('должен выбирать Milena для русской бабки', () => {
    const voice = pickDigitalPriestVoice(
      [
        { name: 'Yuri', lang: 'ru-RU', localService: true } as SpeechSynthesisVoice,
        { name: 'Milena', lang: 'ru-RU', localService: true } as SpeechSynthesisVoice,
      ],
      'ru'
    );

    expect(voice?.name).toBe('Milena');
    expect(voice?.lang).toBe('ru-RU');
  });

  it('должен предпочитать компактный русский голос', () => {
    const voice = pickDigitalPriestVoice(
      [
        { name: 'Milena Premium', lang: 'ru-RU', localService: false } as SpeechSynthesisVoice,
        { name: 'Milena Compact', lang: 'ru-RU', localService: true } as SpeechSynthesisVoice,
      ],
      'ru'
    );

    expect(voice?.name).toBe('Milena Compact');
  });

  it('должен выбирать Zarvox для английского', () => {
    const voice = pickDigitalPriestVoice(
      [
        { name: 'Daniel', lang: 'en-GB', localService: true } as SpeechSynthesisVoice,
        { name: 'Zarvox', lang: 'en-US', localService: true } as SpeechSynthesisVoice,
      ],
      'en'
    );

    expect(voice?.name).toBe('Zarvox');
  });

  it('должен возвращать null для пустого списка', () => {
    expect(pickDigitalPriestVoice([], 'ru')).toBeNull();
  });
});
