import { TestBed } from '@angular/core/testing';

import { ShriftPageFasade } from './shrift-page.fasade.service';

describe('ShriftPageFasadeService', () => {
  let service: ShriftPageFasade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShriftPageFasade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
