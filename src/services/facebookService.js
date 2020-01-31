const axios = require("axios").default;
//require("dotenv").config();

module.exports = axios.create({
  baseURL: "https://graph.facebook.com/v5.0/"
});


