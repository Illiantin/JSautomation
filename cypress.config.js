const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  downloadsFolder: "cypress/downloads",
  fixturesFolder: "cypress/fixtures",
  e2e: {
    baseUrl: 'https://example.cypress.io/todo'
  },
});
