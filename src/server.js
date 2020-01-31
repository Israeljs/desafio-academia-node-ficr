const app = require("express")();
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.set('json spaces',4)
//rotas
var routes = require("./routes/route.js");
routes(app);

app.listen(process.env.PORT || 3000, () => {

});
