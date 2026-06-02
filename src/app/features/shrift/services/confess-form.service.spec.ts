import { TestBed } from '@angular/core/testing';

import { ConfessFormService } from './confess-form.service';

describe('ConfessFormService', () => {
  let service: ConfessFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfessFormService],
    });
    service = TestBed.inject(ConfessFormService);
  });

  it('должен инициализироваться', () => {
    expect(service).toBeTruthy();
  });
});
