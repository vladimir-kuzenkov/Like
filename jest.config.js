module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
  ],
  moduleNameMapper: {
    '^@root/(.*)$': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/__mocks__/fileMock.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  globals: {
    window: {},
    __CONFIG__: {},
  },
  preset: 'ts-jest',
  collectCoverageFrom: [
    "**/*test.{ts,tsx}",
    "!**/node_modules/**",
  ]
}
