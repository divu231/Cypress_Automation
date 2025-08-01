const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl:'https://demo-saas.bugbug.io/divya-patel/tickets',
   // baseUrl:'https://conduit.bondaracademy.com/',
    baseUrl:"https://testautomationpractice.blogspot.com/",
    reporter: 'mochawesome',
    reporterOptions: {
    charts: true,
    reportPageTitle: 'TEST_report',
    reportDir: 'cypress/report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
  
});
