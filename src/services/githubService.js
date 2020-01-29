const {create} = require("axios")


const url = create({
    baseURL: "https://api.github.com/users/"
})
 
const github = () => {
        return url.get('/israeljs')    
    }

const dados = github()



// const github = () => {
//     return axios.get('https://api.github.com/users/israeljs')    
// }

// const dados = github()

dados.then((res) => {
    console.log(res.data)
})

// module.exports = url




/*class UrlGithub {
    constructor(baseURL, useName) {
        this = baseURL
        this = useName
    }
    get() {
        url = `https://api.github.com/users/${useName}`
        return 
    }*/