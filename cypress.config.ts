import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "brqghk",
  e2e: {
    baseUrl: "https://source.thenbs.com/en/gb",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
