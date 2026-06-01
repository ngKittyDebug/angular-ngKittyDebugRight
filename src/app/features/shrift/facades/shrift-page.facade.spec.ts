import { TestBed } from '@angular/core/testing';

import { ShriftPageFacade } from './shrift-page.facade';
import { ConfessFormService } from '../services/confess-form.service';

describe('ShriftPageFacade', () => {
  let service: ShriftPageFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShriftPageFacade, ConfessFormService],
    });
    service = TestBed.inject(ShriftPageFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
