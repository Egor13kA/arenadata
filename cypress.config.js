const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://fgis.gost.ru/fundmetrology/cm/results',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});
