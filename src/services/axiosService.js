const axios = require("axios")
//require("dotenv").config();

class AxiosService {
    constructor(axios) {
        this.axios = axios
    }
    async url() {
        const baseURLF = await axios.create({ baseURL: "https://graph.facebook.com/v5.0/"})
        return baseURLF
    }
    

            
        
    // async urlG(res) {
    //     try {
    //         const urlBGit = await axios.create({
    //             baseURL: "https://api.github.com/users/"
    //           })
          
    //           return res.send({urlBGit})
    //     } catch (error) {
    //         console.log("error", error)
    //     }
    // }
//     module.exports = axios.create({
//         baseURL: "https://graph.facebook.com/v5.0/"
//       });
 } 
module.exports = new AxiosService().url()
  