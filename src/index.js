const express = require("express");
const app = express();

const db = require("./connection/db");
db.authenticate().then(data => console.log("DB rodando")).catch(err => console.log("DB Parou: " +err));

const cors = require('cors');
const routes = require("./routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var corsOptions = {
    origin: '*'
};
app.use(cors(corsOptions));
app.use("/", routes);

app.listen(8080, () => {
    console.log("Rodando server");
});