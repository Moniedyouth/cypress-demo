const { defineConfig } = require("cypress");

const defaultSpecPattern = "./cypress/integration/**/**.spec.ts";
const baseUrl = "https://omara.sk/";
module.exports = defineConfig({
  e2e: {
    projectId: "3v8ymj",
    baseUrl: baseUrl,
    specPattern: defaultSpecPattern,
    requestTimeout: parseInt(20000),
    blockHosts: [
      "*api.exponea.com",
      "*googletagmanager.com",
      "*google-analytics.com",
    ],
    watchForFileChanges: false,
    chromeWebSecurity: false,
    supportFile: "./cypress/support/index.{js,jsx,ts,tsx}",
    viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotsFolder: "report/screenshots",
    videosFolder: "report/videos",
    videoCompression: 0,
    retries:  {
      runMode: 2,
    },
    setupNodeEvents(on, config) {
      
    },
  },
});
