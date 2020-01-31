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

//             // const { id,
//             //      name,
//             //      last_name,
//             //      birthday,
//             //      gender,
//             //      email,
//             //      picture } = Face.data;

//             const gitProfile = {
//                 github_profile: {
//                     name: data.name,
//                     url: data.url,
//                     bio: data.bio,
//                     company: data.company

//                 }
//             }

//             //const repos
//             res.json(gitProfile)
//             // res.json(repos)
//             //res.json(data)

//         }

//         catch (error) {
//             sendStatus(400)
//         }
//     }

// }
// //curl -i -X GET \
//  //"https://graph.facebook.com/v5.0/me?fields=id%2Cname%2Caddress%2Cbirthday%2Cemail%2Cgender&access_token=EAAIbgFzeGfcBAO8sFQqVdAK5djaa67eZC9bixGAg8ZBuSjZA2oXlvN4NQDq3rxTh0pROTje2EZA0BQy8GZAaQr7ag4wwmS3cgZB3h4EW6cZCzURu4KfdCzeZCw9qhG4eieHz3ykHDTLhxiBmNfpzOVgRZBW8QrB53kdfe4CjYsjqjxYZA3dZAYtjGYJpCp1XiOhg8ZA5wwu1SXZCUJW9tZAZBcoA3670p23aD8Ait3FbT74awWU5kyvVeZAViZCRP"
//     // 593188081244663     42cdf3cd3d25015ad897a1fd903cddde
//     // EAAIbgFzeGfcBAKISTD6fweoND4dqZA1j2Bo4dsCp44FqsfDUaJff8d6hRCH6UGAHceh3EMCOIGZBS3xItqMG10uUdurZCyKZCZCSZCPngGZB3RZBBTZAxsXD21sl4kO8cOcaMrcbOGDumjdBHMqIXDbMjhnya0uirKLP2U4dvZByC6ublZCqWxaUoAyKZAyHK2bdlPGC0OMcWOZC3CAZDZD

//const axios = require("axios"); //${process.env.FACE_TOKEN}
const urlBaseG = require('../services/githubService')
const urlBaseF = require("../services/facebookService")
require("dotenv").config();

module.exports = {
  async get(req, res) {
    try {
      const resultFace = await urlBaseF.get(`me?fields=id%2Cname%2Caddress%2Cbirthday%2Cemail%2Cgender%2Cfirst_name%2Clast_name%2Clocation&access_token=${process.env.FACE_TOKEN}`); //(`https://graph.facebook.com/v5.0/me?fields=id%2Cname%2Caddress%2Cbirthday%2Cemail%2Cgender%2Cfirst_name%2Clast_name%2Clocation&access_token=EAAIbgFzeGfcBAKYXzVYzvaot1VS2m6C7WIz34JlhZCu5bTyqC9T9TZCjDR8qIj49KGdyVCcMMZCZA99sesbhjqLCyZCBEahKoyp8mx1wFPLH6RyDZAwmYnGPxVZCDavURwpaPDuKusHbXFOnN8oVmEBPKycRofrPQ2EcAkap5ouWOLGvjY3lkZBISDQTH18Ge4qTWyCjEnC0ninjTdV1ReJkFd35ciu4PWP8ksYCuETscQZDZD`);

      const { id, name, last_name, birthday, gender, email, picture } = resultFace.data;

      //console.log("facebook_profile", resultFace);

      const profile = {id, name, last_name, birthday, gender, email, picture
      };
       

      return res.json(profile);
    } catch (err) {
      console.error("ERROR: Problemas com o a Aplicação!");
    }
  }
};
