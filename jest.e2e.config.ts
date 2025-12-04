import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/e2e/**/*.e2e.test.ts"],
  forceExit: true,
  maxWorkers: 1,
  testTimeout: 60000, // E2E costuma demorar mais
  verbose: true,
};

export default config;
