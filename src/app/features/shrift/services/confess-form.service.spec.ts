import { TestBed } from '@angular/core/testing';

import { ConfessFormService } from './confess-form.service';

describe('ConfessFormService', () => {
  let service: ConfessFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfessFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
