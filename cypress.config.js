const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ftdnkp',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
