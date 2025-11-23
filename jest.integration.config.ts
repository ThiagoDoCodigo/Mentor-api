export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.integration.test.ts"],
  forceExit: true,
  maxWorkers: 1,
  testTimeout: 30000,
};
