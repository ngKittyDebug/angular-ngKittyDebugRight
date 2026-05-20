import { vi } from 'vitest';

import { noop } from './noop';

describe('noop', () => {
  describe('Happy Path', () => {
    it.each([[undefined], [''], [{ foo: 'bar' }], ['whatever']])('должен вернуть undefined для входа %p', (value) => {
      const noOperation = vi.fn().mockImplementation(noop);

      const result = noOperation(value);

      expect(result).toBeUndefined();
    });
  });
});
