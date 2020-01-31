// //const urlBaseG = require("../services/githubService");
// const axios = require("axios")

// module.exports = {
//   get: async (req, res) => {

//     try {
        
//         const { data } = await axios.get("https://api.github.com/users/israeljs", {
//           Authorizathion: "token 83d5b63c913f57e70265f8679b9935788889e431"
//         });
    
//         const gitData = {
//                 github_profile: {
//                     name: data.name,
//                     url: data.url,
//                     bio: data.bio,
//                     company: data.company
    
//                 }
//             }
    
//         return res.json(gitData)
//     } catch (error) {
//         console.error("ERROR ", error) 
//     }
    
//   }
// };
// const urlBaseG = require('../services/serviceGit');
// const apiFace = require('../services/serviceFace');
// const axios = require('axios');

// const _ = require('lodash')

//const _ = require('lodash')
const urlBaseG = require('../services/githubService')
const urlBaseF = require("../services/facebookService")
require("dotenv").config();


//const axios = require('axios');


module.exports = { async get(req, res){
    
    let repoDefault = [];
    let face = []

    try {
        
        //let { name } = req.params
        let { data } = await urlBaseG.get('/israeljs',
          { Authorizathion: `token ${process.env.GIT_TOKEN}`})


        let { data: repos } = await urlBaseG.get(`/israeljs/repos`)

        
        const apiFace = await urlBaseF.get(`me?fields=id%2Cname%2Caddress%2Cbirthday%2Cemail%2Cgender%2Cfirst_name%2Clast_name%2Clocation&access_token=EAAIbgFzeGfcBAHBcE78ZAHlZAbZCsWa5uiHy1i6LO8b0NQsu8WdLgqzKJCORhW7aHgYZALwAPqsiVlDr9bEfTAQqHoYiVqpOk6KlNh5JQ2OjL5g8pQr9sfQYVwztYvxm3NyHKhGSFbyqkBm6R0tQGxKxHm4NzcyAMsA2jj8ZC7wZDZD
        `);

        const { name, last_name, address,gender, birthday, email} = apiFace.data;
       
        const profile = {
            name,
            last_name,
            address,
            gender,
            birthday,
            email,
          };
    
        repos.map(repositorio => {
            repoDefault.push({
                size: repositorio.size,
                name: repositorio.name,
                url: repositorio.url,
            })
        })
        
        repoDefault.sort((a, b) => {
            return b.size - a.size
        })



        return res.json({ facebook_profile:[profile],
            github_profile: {
            name: data.name,
            url: data.url,
            bio: data.bio,
            company: data.company,
            repositorios: [repoDefault],
            
        }})


    } catch (error) {
        console.log(error)
        res.send("error", error)
    }
}
}