const app = require('express')()
const bodyParser = require('body-parser')
const door = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//app.set('json spaces',4)
//rotas
var routes = require('./routes/route.js') //importando a rota
routes(app)

app.listen(door, () => {
console.log(`Server is running on port ${door}!`)
})