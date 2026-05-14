import { defineConfig } from 'vitest/config';

// Standalone Vitest config for the Netlify functions backend (`pnpm test:functions`).
// Kept separate from the Angular `@angular/build:unit-test` runner — different
// environment (node) and source root.
export default defineConfig({
  test: {
    root: 'netlify/functions',
    include: ['**/*.spec.ts'],
    environment: 'node',
    globals: true,
    clearMocks: true,
  },
});
