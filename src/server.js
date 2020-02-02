const app = require("express")();
const bodyParser = require("body-parser");
require("dotenv").config();
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.set('json spaces',4)
//rotas
var routes = require("./routes/route.js");
routes(app);

//app.listen(process.env.PORT || 3000, () => {
app.listen(port, () => {
    console.log(`running on port ${port}` )});
   // console.log(`running on port ${process.env.PORT}` )});
