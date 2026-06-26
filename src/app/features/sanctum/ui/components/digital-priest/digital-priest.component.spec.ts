import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { DigitalPriestComponent } from './digital-priest.component';
import { DigitalPriestMood } from '@features/sanctum/data/models/digital-priest-mood.model';
import { DigitalPriestQuoteService } from '@features/sanctum/ui/components/digital-priest/services/digital-priest-quote.service';
import { DigitalPriestVoiceService } from '@features/sanctum/ui/components/digital-priest/services/digital-priest-voice.service';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';

describe('DigitalPriestComponent', () => {
  let fixture: ComponentFixture<DigitalPriestComponent>;
  let component: DigitalPriestComponent;
  const priestVoiceMock = { speakQuote: vi.fn().mockResolvedValue(undefined), cancel: vi.fn() };
  const priestQuoteMock = {
    pick: vi.fn().mockResolvedValue('Idle quote 1'),
  };

  beforeEach(async () => {
    priestVoiceMock.speakQuote.mockReset();
    priestVoiceMock.speakQuote.mockResolvedValue(undefined);
    priestVoiceMock.cancel.mockReset();
    priestQuoteMock.pick.mockReset();
    priestQuoteMock.pick.mockResolvedValue('Idle quote 1');

    await TestBed.configureTestingModule({
      imports: [DigitalPriestComponent, TranslocoTestingMock],
    })
      .overrideComponent(DigitalPriestComponent, {
        set: {
          providers: [
            { provide: DigitalPriestVoiceService, useValue: priestVoiceMock },
            { provide: DigitalPriestQuoteService, useValue: priestQuoteMock },
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(DigitalPriestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('должен инициализироваться', () => {
    expect(component).toBeTruthy();
  });

  it('должен применять класс настроения проповеди', () => {
    fixture.componentRef.setInput('mood', DigitalPriestMood.PREACHING);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.digital-priest-preaching')).toBeTruthy();
  });

  it('должен показывать реплику и следить глазами при взаимодействии', async () => {
    const frame = document.createElement('div');

    frame.getBoundingClientRect = () =>
      ({
        left: 100,
        top: 100,
        width: 100,
        height: 100,
        right: 200,
        bottom: 200,
        x: 100,
        y: 100,
        toJSON: () => ({}),
      }) as DOMRect;

    component['onPointerMove']({
      currentTarget: frame,
      clientX: 180,
      clientY: 130,
    } as unknown as PointerEvent);

    expect(component['eyeOffsetX']()).toBeGreaterThan(0);

    let resolveSpeak!: () => void;

    priestVoiceMock.speakQuote.mockImplementation(
      () =>
        new Promise<void>((resolve) => {
          resolveSpeak = resolve;
        })
    );

    const speakPromise = component['speakFromQuotes']();

    await Promise.resolve();
    fixture.detectChanges();

    expect(component['isEngaged']()).toBe(true);
    expect(component['speechText']()).toBe('Idle quote 1');
    expect(priestVoiceMock.speakQuote).toHaveBeenCalled();

    resolveSpeak();
    await speakPromise;
    fixture.detectChanges();

    expect(component['isEngaged']()).toBe(false);
    expect(component['speechText']()).toBeNull();
  });
});
