import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { TarotService } from './tarot.service';

describe('TarotService', () => {
  let service: TarotService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TarotService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(TarotService);
  });

  it('должен инициализироваться', () => {
    expect(service).toBeTruthy();
  });
});
