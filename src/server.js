const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.set('json spaces',4)
//rotas
var routes = require("./routes/route.js");
routes(app);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${port}!`);
});
