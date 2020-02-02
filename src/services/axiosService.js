const axios = require("axios").default;
//require("dotenv").config();

class AxiosService {
    constructor() {
        this.urlBFace 
        this.urlBGit
    }
    createUrlBFace() {
        axios.create({ 
             baseURL: "https://graph.facebook.com/v5.0/"
        });
        return this.urlBFace = baseURL
    }
    createUrlBGit() {
        axios.create({ 
             baseURL: "https://graph.facebook.com/v5.0/"
        });
        return this.urlBGit = baseURL
    }
    
   

} console.log(this.urlBFace)
module.exports = new AxiosService()
  






//     d() {
//         this.Axios.get(`${this.urlBase}`)
//     }
// }