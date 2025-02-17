const { defineConfig } = require("cypress")

module.exports = defineConfig({
    e2e: {
      baseUrl: "https://guest:welcome2qauto@qauto2.forstudy.space/",
      env: {
        email: "ibea2004@gmail.com",
        password: "Hesh.1234"
      },
      reporter: "mochawesome",
      reporterOptions: {
        reportDir: "cypress/reports",
        overwrite: false,
        html: true,
        json: true
      }
    }
  })