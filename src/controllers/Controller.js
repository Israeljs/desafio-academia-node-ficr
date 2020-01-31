// const urlBaseG = require('../services/githubService')
// const urlBaseF = require("../services/facebookService")

// module.exports = {

//     get: async (req, res) => {
//         try {

//             //const {data} = await urlBaseF.get("me?fields=id%2Cname%2Caddress%2Cbirthday%2Cemail%2Cgender&access_token=EAAIbgFzeGfcBAO8sFQqVdAK5djaa67eZC9bixGAg8ZBuSjZA2oXlvN4NQDq3rxTh0pROTje2EZA0BQy8GZAaQr7ag4wwmS3cgZB3h4EW6cZCzURu4KfdCzeZCw9qhG4eieHz3ykHDTLhxiBmNfpzOVgRZBW8QrB53kdfe4CjYsjqjxYZA3dZAYtjGYJpCp1XiOhg8ZA5wwu1SXZCUJW9tZAZBcoA3670p23aD8Ait3FbT74awWU5kyvVeZAViZCRP");

//             const { data } = await urlBaseG.get('/israeljs', {
//                 Authorizathion: "token 0fb1916f5828d12a08455e9d25547de5363c105e"
//             })
//             const { repos } = await urlBaseG.get('/israeljs/repos', {
//                 Authorizathion: "token 0fb1916f5828d12a08455e9d25547de5363c105e"
//             })


const urlBaseG = require('../services/githubService')
const urlBaseF = require("../services/facebookService")
require("dotenv").config();

module.exports = {
  async get(req, res) {

    try {
      const face = await urlBaseF.get(`me?fields=id%2Cname%2Caddress%2Cbirthday%2Cemail%2Cgender%2Cfirst_name%2Clast_name%2Clocation&access_token=${process.env.FACE_TOKEN}`);

      const { id, name, last_name, birthday, gender, email, picture } = face.data;

      const faceData = {id, name, last_name, birthday, gender, email, picture};
       
      return res.json(faceData);


      const { data } = await urlBaseG.get('/israeljs', { Authorizathion: "token 83d5b63c913f57e70265f8679b9935788889e431" })

      const gitData = {
        github_profile: {
            name: data.name,
            url: data.url,
            bio: data.bio,
            company: data.company
        }
    } 

      res.json(gitData)
    } catch (error) {
      console.error("ERROR!", error);
    }
  }
};



