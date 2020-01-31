const _ = require('lodash')
const urlBaseG = require('../services/githubService')
const urlBaseF = require("../services/facebookService")
require("dotenv").config();


module.exports = {
  async get(req, res) {
    
    const repositories = []
    const profile = []

    try {
      const face = await urlBaseF.get(`me?fields=id%2Cname%2Caddress%2Cbirthday%2Cemail%2Cgender%2Cfirst_name%2Clast_name%2Clocation&access_token=${process.env.FACE_TOKEN}`);

      const { id, name, last_name, birthday, gender, email, picture } = face.data;

      const faceData = {id, name, last_name, birthday, gender, email, picture};


      const { data } = await urlBaseG.get('/israeljs', { Authorizathion: `token ${process.env.GIT_TOKEN}`}) //"token 83d5b63c913f57e70265f8679b9935788889e431" })

    //   const gitData = {
    //     github_profile: {
    //         name: data.name,
    //         url: data.url,
    //         bio: data.bio,
    //         company: data.company
    //     }
    // } 


      const { data: repos } = await urlBaseG.get('/israeljs/repos')

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

    profile = faceData

    return res.json({ facebook_profile:[profile],
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



