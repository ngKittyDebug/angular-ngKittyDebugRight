import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { DigitalPriestMood } from '@features/sanctum/data/models/digital-priest-mood.model';
import { DigitalPriestQuoteService } from '@features/sanctum/ui/components/digital-priest/services/digital-priest-quote.service';
import { priestQuotesServiceMock } from '@features/sanctum/services/priest-quotes.service.mock';
import { PriestQuotesService } from '@features/sanctum/services/priest-quotes.service';

describe('DigitalPriestQuoteService', () => {
  let service: DigitalPriestQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DigitalPriestQuoteService, { provide: PriestQuotesService, useValue: priestQuotesServiceMock }],
    });

    service = TestBed.inject(DigitalPriestQuoteService);
  });

  it('не должен повторять реплику, пока не исчерпан пул', async () => {
    const quoteList = new Set<string>();

    for (let index = 0; index < 3; index++) {
      quoteList.add(await service.pick(DigitalPriestMood.IDLE, 80, false));
    }

    expect(quoteList.size).toBe(3);
  });

  it('должен начать новый цикл после исчерпания пула', async () => {
    const firstCycle = [
      await service.pick(DigitalPriestMood.IDLE, 80, false),
      await service.pick(DigitalPriestMood.IDLE, 80, false),
      await service.pick(DigitalPriestMood.IDLE, 80, false),
    ];
    const fourthQuote = await service.pick(DigitalPriestMood.IDLE, 80, false);

    expect(firstCycle).toContain(fourthQuote);
  });
});
