const express = require("express");
const app = express();
const path = require("path");
const database = require("./data/database");
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(require('./routes/demo'));

database.connectToDatabase().then(app.listen(3000));
