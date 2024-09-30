/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */  
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  reporters: [
    "default",
    ["jest-junit", { suiteNameTemplate: "{filename}" }],
  ],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,js,jsm,tsx,jsx,tsm}'],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  coveragePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/", "<rootDir>/tests/"]
};