//const {create} = require("axios")
const axios = require("axios")

module.exports = axios.create({
    baseURLF: "https://api.github.com/users/"
  });

