// @ts-check
const { devices } = require('@playwright/test');
const config = {
  testDir: './tests',
  retries: 2,
  /* Maximum time one test can run for. */
 timeout: 100* 1000,
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
  reporter: 'html',
  projects: [
 
    {
 
      name:'safari',
      use:{

        browserName: 'webkit',
        headless : false,
        screenshot : 'off',
        trace : 'on',
       // ...devices['Nexus 10']
      }
    },
    {

      name:'chrome',
      use:{

      browserName: 'chromium',
        headless : false,
        screenshot : 'on',
        trace : 'on',
        ignoreHttpErrors:true,
      //  viewport:{width:720,height:720},
        video:'retain-on-failure'
      }


    }





  ]
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

};

export default config;
