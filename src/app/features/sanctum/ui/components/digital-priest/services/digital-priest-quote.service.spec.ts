import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { DigitalPriestMood } from '@features/sanctum/ui/components/digital-priest/data/models/digital-priest-mood.model';
import { DigitalPriestQuoteService } from '@features/sanctum/ui/components/digital-priest/services/digital-priest-quote.service';

describe('DigitalPriestQuoteService', () => {
  let service: DigitalPriestQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DigitalPriestQuoteService],
    });

    service = TestBed.inject(DigitalPriestQuoteService);
  });

  it('не должен повторять реплику, пока не исчерпан пул', () => {
    const quoteList = new Set<string>();

    for (let index = 0; index < 3; index++) {
      quoteList.add(service.pick(DigitalPriestMood.IDLE, 80, false));
    }

    expect(quoteList.size).toBe(3);
  });

  it('должен начать новый цикл после исчерпания пула', () => {
    const firstCycle = [
      service.pick(DigitalPriestMood.IDLE, 80, false),
      service.pick(DigitalPriestMood.IDLE, 80, false),
      service.pick(DigitalPriestMood.IDLE, 80, false),
    ];
    const fourthQuote = service.pick(DigitalPriestMood.IDLE, 80, false);

    expect(firstCycle).toContain(fourthQuote);
  });
});
