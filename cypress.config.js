const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    // saveCucumberJson: true  
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile});
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    viewportHeight: 900,
    viewportWidth: 1440,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    video: true,
    videoCompression: 32,
    screenshotOnRunFailure: true,
  },
});
