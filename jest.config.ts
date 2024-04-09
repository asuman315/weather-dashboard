// jest.config.ts
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json'
    }
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  "moduleNameMapper": {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.ts", 
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.ts"
  }
};

export default config;
