// @ts-check
import { devices } from '@playwright/test';
const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 100 * 1000,
  expect: {
    timeout: 8000
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  //forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [

    ['list'], // Default reporter
    ['allure-playwright'], // Add Allure reporter
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName: 'chromium',
    headless : false,
    screenshot:'on',
    trace: 'on',
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
};

export default config;
