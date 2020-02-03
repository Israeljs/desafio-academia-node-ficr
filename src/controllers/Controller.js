const _ = require('lodash')
//const {baseURLF} = require('../services/axiosService')
const baseURLG = require('../services/githubService')
const baseURLF = require("../services/facebookService")
//require('dotenv').config();


const repositories = []
//const profile = []

module.exports = {
  async get(req, res) {

    try {
      const face = await baseURLF.get("https://graph.facebook.com/v5.0/me?fields=name%2Caddress%2Cbirthday%2Cemail%2Cfirst_name%2Cgender%2Clast_name&access_token=EAAIbgFzeGfcBAPEiZCrS7emPyGbexAoTBu62jZB0GNqZBTzDl2XwqdD10ZCZCwcHD1HSbmaBQU19sFFcqlq6u1WInZB7ea8qZAQAu8wgQJhmlvfVZBkaItNLAmUK80zMyYABbZAHNZC3locnpBFpQnZCZCCHdVTIXzqo8bE4mpHMlCqwPyrcYvZBjGktQnxMgWu0ZBU7u9orhqSr0nEcpJkbiv4ALwASxB2D4sqYsKvTxBPqj4IIrZAd0zk6FwHm1ZBeX2SeZCxAZD")   

      const { name, adress, last_name, birthday, gender, email  } = face.data;

      const faceData = { name, adress, last_name, birthday, gender, email };


      const { data } = await baseURLG.get('/israeljs', { Authorizathion: "token 83d5b63c913f57e70265f8679b9935788889e431"}) 

      /*{
  "name": "Israel Jerônimo",
  "birthday": "07/05/1980",
  "email": "silvaij16@gmail.com",
  "first_name": "Israel",
  "gender": "male",
  "last_name": "Jerônimo",
  "id": "1685122708309134"
}*/

    //   const gitData = {
    //     github_profile: {
    //         name: data.name,
    //         url: data.url,
    //         bio: data.bio,
    //         company: data.company
    //     }
    // } 


      const { data: repos } = await baseURLG.get('/israeljs/repos')

      repos.map(r => {
        repositories.push({
            size: r.size,
            name: r.name,
            url: r.url,
        })
    })
    
    repositories.sort((a, b) => {
        return b.size - a.size
    })

    const repoArr = _.chunk(repositories, 3)

    return res.json({ facebook_profile:[faceData],
      github_profile: {
      name: data.name,
      url: data.url,
      bio: data.bio,
      company: data.company,
      repositorios: [...repoArr[0]],
      
  }})
    
    } catch (error) {
      console.error("ERROR!", error);
    }
  }
};



