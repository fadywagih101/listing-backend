module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^database/(.*)$': '<rootDir>/src/database/$1',
    '^dto/(.*)$': '<rootDir>/src/dtos/$1',
    '^tests/(.*)$': '<rootDir>/src/test/$1',
  },
};
