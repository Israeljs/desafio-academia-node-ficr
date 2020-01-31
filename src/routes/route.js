const Controller = require('../controllers/Controller')

module.exports = (app) => {
   
        
    app.route('/api/curriculo')
    .get(Controller.get)

}