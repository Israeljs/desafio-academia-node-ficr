const urlBaseG = require('../services/githubService')
const urlBaseF = require("../services/facebookService")

module.exports = {

    get: async (req, res) => {
        try {
            let { data } = await urlBaseG.get('/israeljs', {
                Authorizathion: "token 0fb1916f5828d12a08455e9d25547de5363c105e"
            })

            let gitProfile = {
                github_profile: {
                    name: data.name,
                    url: data.url,
                    bio: data.bio,
                    company: data.company
    
                }
            }
            res.json(gitProfile)

        }

        catch (error) {
            sendStatus(400)
        }
    }

}
//curl -i -X GET \
 //"https://graph.facebook.com/v5.0/me?fields=id%2Cname%2Caddress%2Cbirthday%2Cemail%2Cgender&access_token=EAAIbgFzeGfcBAO8sFQqVdAK5djaa67eZC9bixGAg8ZBuSjZA2oXlvN4NQDq3rxTh0pROTje2EZA0BQy8GZAaQr7ag4wwmS3cgZB3h4EW6cZCzURu4KfdCzeZCw9qhG4eieHz3ykHDTLhxiBmNfpzOVgRZBW8QrB53kdfe4CjYsjqjxYZA3dZAYtjGYJpCp1XiOhg8ZA5wwu1SXZCUJW9tZAZBcoA3670p23aD8Ait3FbT74awWU5kyvVeZAViZCRP"
    // 593188081244663     42cdf3cd3d25015ad897a1fd903cddde
    // EAAIbgFzeGfcBAKISTD6fweoND4dqZA1j2Bo4dsCp44FqsfDUaJff8d6hRCH6UGAHceh3EMCOIGZBS3xItqMG10uUdurZCyKZCZCSZCPngGZB3RZBBTZAxsXD21sl4kO8cOcaMrcbOGDumjdBHMqIXDbMjhnya0uirKLP2U4dvZByC6ublZCqWxaUoAyKZAyHK2bdlPGC0OMcWOZC3CAZDZD
  








