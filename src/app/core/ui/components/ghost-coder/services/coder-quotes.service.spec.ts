import { TestBed } from '@angular/core/testing';

import { CoderQuotesService } from './coder-quotes.service';

describe('CoderQuotesService', () => {
  let service: CoderQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoderQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
