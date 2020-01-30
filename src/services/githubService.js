//const {create} = require("axios")
const axios = require("axios")


const urlBase = axios.create({
    baseURL: "https://api.github.com/users/"
})
 

module.exports = urlBase




/*class UrlGithub {
    constructor(baseURL, useName) {
        this = baseURL
        this = useName
    }
    get() {
        url = `https://api.github.com/users/${useName}`
        return 
    }*/