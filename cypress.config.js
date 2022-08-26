const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  "baseUrl": "http://sampleapp.tricentis.com/101/app.php"
  },
});
