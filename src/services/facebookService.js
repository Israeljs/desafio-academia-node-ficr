const axios = require("axios").default;
//require("dotenv").config();

module.exports = axios.create({
  baseURL: "https://graph.facebook.com/v5.0/"
});


// const axios = require('axios');

// module.exports = {

//     async show(req, res) {

//     try {
//       const resultFace = await axios.get(``);
      
      
//       const { id, name, last_name, birthday, gender, email, picture } = resultFace.data;

//       console.log("facebook_profile", resultFace)

//       const profile = {
//         id,
//         name,
//         last_name,
//         birthday,
//         gender,
//         email,
//         picture,
//       };

//       return res.json(profile);
//     }
//     catch (err) {
//       console.error('ERROR: Problemas com o a Aplicação!');
//     }
//   }
// }
