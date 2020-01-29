module.exports = (app) => {
   
    const gitController = require('../controllers/gitController')
        
    app.route('/api/curriculo')
    .get(gitController)

}