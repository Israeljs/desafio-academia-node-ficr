//const {create} = require("axios")
const axios = require("axios")


const urlBase = axios.create({
    baseURL: "https://api.github.com/users/"
})
 

module.exports = urlBase

