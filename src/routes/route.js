const gitController = require('../controllers/gitController')

module.exports = (app) => {
   
        
    app.route('/api/curriculo')
    .get(gitController.get)

}