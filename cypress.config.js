const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile});
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
