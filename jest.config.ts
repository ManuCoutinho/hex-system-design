export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.(spec|test).ts'],
  collectCoverage: true,
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1'
  }
}