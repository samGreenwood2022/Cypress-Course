import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'brqghk',
  // the site under test is live and third-party, so allow slower commands and retry flaky runs
  defaultCommandTimeout: 10000,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    baseUrl: 'https://source.thenbs.com/en/gb',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
