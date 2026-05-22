import { noop } from './noop';

describe('noop', () => {
  it('должен вернуть undefined', () => {
    expect(noop()).toBeUndefined();
  });
});
