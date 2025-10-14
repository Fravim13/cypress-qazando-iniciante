const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do curso de Cypress ',
      reportPageTitle: 'Projeto do curso de Cypress',
    },
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 4000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
