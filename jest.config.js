module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.tsx', "**/*.test.ts"],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
