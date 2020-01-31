const Control = require('../controllers/Control')

module.exports = (app) => {
   
        
    app.route('/api/curriculo')
    .get(Control.get)

}