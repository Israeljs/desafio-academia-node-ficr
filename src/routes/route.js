const gitController = require('../controllers/controller')

module.exports = (app) => {
   
        
    app.route('/api/curriculo')
    .get(gitController.get)

}