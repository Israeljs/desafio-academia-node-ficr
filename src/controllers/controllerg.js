//const urlBaseG = require("../services/githubService");
const axios = require("axios")

module.exports = {
  get: async (req, res) => {

    try {
        
        const { data } = await axios.get("https://api.github.com/users/israeljs", {
          Authorizathion: "token 83d5b63c913f57e70265f8679b9935788889e431"
        });
    
        const gitData = {
                github_profile: {
                    name: data.name,
                    url: data.url,
                    bio: data.bio,
                    company: data.company
    
                }
            }
    
        return res.json(gitData)
    } catch (error) {
        console.error("ERROR ", error) 
    }
    
  }
};
