/** @jest-config-loader ts-node */
import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/test\\.ts$'],
};

export default config;
