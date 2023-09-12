module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.ts'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    // Add this line to enable ESM support
    extensionsToTreatAsEsm: ['.ts'],
  };
  
  