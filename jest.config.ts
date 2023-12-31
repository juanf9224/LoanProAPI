import { Config } from "jest";

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'text-summary', 'html'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/__tests__/**',
    '!**/index.ts',
    '!src/config/*',
    '!src/db/knex.ts',
    '!src/db/migrations/*',
    '!src/db/seeds/*.seed.ts',
  ],
  roots: ['./src'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  preset: 'ts-jest',
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
