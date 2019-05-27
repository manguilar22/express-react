require("./db/db");                 // Mongoose
require("./db/driver");             // MongoDB Driver
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 5000;
/**
 * Express App
 */
const person = require("./routes/person");
const pet = require("./routes/pet");
const user = require("./routes/user");
let app = express();
/**
 * Public
**/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")));
/**
 *  Express Routes
 */
app.use("/person",person);
app.use("/pet",pet);
app.use("/user",user);

app.get("/",(req,res) => res.render("index"));

app.listen(port , () => console.log(`[+]\tListening::\t${port}`));
