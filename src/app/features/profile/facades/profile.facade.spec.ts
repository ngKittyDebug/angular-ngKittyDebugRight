import { TestBed } from '@angular/core/testing';

import { ProfileFacade } from './profile.facade';
import { expect } from 'vitest';

describe('ProfileFacade', () => {
  let facade: ProfileFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileFacade],
    });
    facade = TestBed.inject(ProfileFacade);
  });

  it('должен инициализироваться', () => {
    expect(facade).toBeTruthy();
  });
});
