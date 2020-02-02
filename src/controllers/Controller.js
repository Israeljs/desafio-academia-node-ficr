const _ = require('lodash')
const urlBaseG = require('../services/githubService')
const urlBaseF = require("../services/facebookService")


const repositories = []
const profile = []

module.exports = {
  async get(req, res) {

    try {
      const face = await urlBaseF.get("me?fields=id%2Cname%2Caddress%2Cbirthday%2Ceducation%2Cemail%2Cfirst_name%2Cgender%2Cfavorite_athletes%2Cis_shared_login%2Cage_range%2Clocation%2Cmiddle_name&access_token=EAAIbgFzeGfcBAL3RMegAw2mAZAtbH6pa4M1LaVkCGBsqDM4joZAzkrZANg6nBiK6lsk3EtRgPZCVZA6Ef9zVWwTyZAxjs7eumM2s0zsFEF9k8nxj3ZANBviumQ1BKwaBC6UQ4mWEjngyYQM9RuZBFgg91T0T9pBFZBOYWqCxkOMR3OyuaSkXEzkwZAZBk66qZBIl0zl47NvFIkcEJwqnf2s3THg0zT6QE6ReGPiyzzNTbEwncgZDZD") //(`me?fields=id%2Cname%2Caddress%2Cbirthday%2Ceducation%2Cemail%2Cfirst_name%2Cgender%2Cfavorite_athletes%2Cis_shared_login%2Cage_range%2Clocation%2Cmiddle_name&access_token=${process.env.FACE_TOKEN}`);

      const { name, last_name, birthday, gender, email  } = face.data;

      const faceData = { name, last_name, birthday, gender, email };


      const { data } = await urlBaseG.get('/israeljs', { Authorizathion: `token ${process.env.GIT_TOKEN}`}) 

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



