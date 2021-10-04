const express = require("express");
const app = express();
const db = require("./connection/db");

db.authenticate().then(data => console.log("DB rodando")).catch(err => console.log("DB Parou: " +err));

const cors = require('cors');
const bodyParser = require("body-parser");
const routes = require("./routes");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

var corsOptions = {
    origin: '*'
};
app.use(cors(corsOptions));

app.use("/", routes);

app.use(express.static('public'));

app.listen(8080, () => {
    console.log("Rodando server");
});