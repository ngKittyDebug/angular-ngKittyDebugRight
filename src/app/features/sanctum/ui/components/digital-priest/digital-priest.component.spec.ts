import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { DigitalPriestComponent } from './digital-priest.component';
import { DigitalPriestMood } from '@features/sanctum/ui/components/digital-priest/data/models/digital-priest-mood.model';
import { DigitalPriestQuoteService } from '@features/sanctum/ui/components/digital-priest/services/digital-priest-quote.service';
import { DigitalPriestVoiceService } from '@features/sanctum/ui/components/digital-priest/services/digital-priest-voice.service';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';

describe('DigitalPriestComponent', () => {
  let fixture: ComponentFixture<DigitalPriestComponent>;
  let component: DigitalPriestComponent;
  const priestVoiceMock = { speakQuote: vi.fn().mockResolvedValue(undefined), cancel: vi.fn() };

  beforeEach(async () => {
    priestVoiceMock.speakQuote.mockReset();
    priestVoiceMock.speakQuote.mockResolvedValue(undefined);
    priestVoiceMock.cancel.mockReset();

    await TestBed.configureTestingModule({
      imports: [DigitalPriestComponent, TranslocoTestingMock],
    })
      .overrideComponent(DigitalPriestComponent, {
        set: {
          providers: [{ provide: DigitalPriestVoiceService, useValue: priestVoiceMock }, DigitalPriestQuoteService],
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

    component['onInteract']();
    fixture.detectChanges();

    expect(component['isEngaged']()).toBe(true);
    expect(component['speechKey']()).toContain('sanctum.priest.quotes');
    expect(priestVoiceMock.speakQuote).toHaveBeenCalled();

    await Promise.resolve();
    fixture.detectChanges();

    expect(component['isEngaged']()).toBe(false);
    expect(component['speechKey']()).toBeNull();
  });
});
