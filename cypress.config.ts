import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
      "defaultCommandTimeout": 180000,
      "numTestsKeptInMemory": 0,
      screenshotOnRunFailure: false,
      video: false,
      pageLoadTimeout: 180000
  
  },
});
