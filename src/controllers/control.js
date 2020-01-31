const urlBaseG = require('../services/githubService')
const urlBaseF = require("../services/facebookService")
require("dotenv").config();

module.exports = {
    async get(req, res) {

  
      try {
        let gitAPI = await urlBaseG.get('/israeljs', { Authorizathion: `token ${process.env.GIT_TOKEN}`})

        let repoResponse = await urlBaseG.get(`/israeljs/repos`)

        const fbAPI = await urlBaseF.get(`me?fields=id%2Cname%2Caddress%2Cbirthday%2Cemail%2Cgender%2Cfirst_name%2Clast_name%2Clocation&access_token=${process.env.FACE_TOKEN}`);

        // const { name, last_name, address,gender, birthday, email} = apiFace.data;
       
        // const profile = {
        //     name,
        //     last_name,
        //     address,
        //     gender,
        //     birthday,
        //     email,
        //   };
 
        const { name = login, html_url, bio, company, repos_url, } = gitAPI.data;
        const repos = repoResponse.data
        const {email,birthday,gender}= fbAPI.data;
        

        const schema = {
            "nome": name,
            "data_nascimento": birthday,
            "endereco": "Rua fulano de tal, 256 - Pe",
            "email": email,
            "genero": gender,
            "bio": "Full Stack developer and Mobile developer",
            "foto": "https://avatars2.githubusercontent.com/u/32085246?v=4",
            "formacao": [
            {
                "instituicao": "FICR",
                "curso": "SI",
                "inicio": "01/08/2017",
                "termino": "20/2/2020"
            }
            ],
            "experiencia_profissional": [
            {
                "empresa": "Bratecnet Tecnologia",
                "funcao": "Auxiliar de Manutenção",
                "atividade": "instalação e manutenção em rede de cabeamento estruturado, suporte ao cliente.",
                "inicio": "2014",
                "termino": "2016"
            },
            ],
            "github": {


            "perfil": html_url,
            "alguns_repositorios": [
            {
            "size": repos[0].size,
            "name": repos[0].name,
            "url": repos[0].url
            },
            {
            "size": repos[6].size,
            "name":  repos[6].name,
            "url": repos[6].url
            },
            {
            "size": repos[5].size,
            "name": repos[5].name,
            "url": repos[5].url
            }
        ]
        }
            }

        return res.json(schema)

        
    } catch (error) {
      console.error("ERROR!", error);
    }
  }
};