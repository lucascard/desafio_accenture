const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    defaultCommandTimeout: 10000,
    baseUrl: "http://sampleapp.tricentis.com/101/app.php"

  },
  env:{
    username: 'lucascard',
    password: 'Teste123'
  }
});
