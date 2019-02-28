require("./db/config");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongo = require("./db/mongoose");
const port = process.env.PORT || 5000;
/**
 * Data-Imports
**/
const persons = require("./data/persons");

/**
 * Express App
 */
const registry = require("./routes/registry");
const person = require("./routes/person");
let app = express();
/**
 * Public
**/
app.use(express.static(require("path").join(__dirname,"public")));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

/**
 *  Express Routes
 */
app.use("/registry",registry);
app.use("/person",person);
app.get("/",(req,res) => res.render("index"));

app.get("/persons",(req,res) => res.json(persons));

app.listen(port , () => console.log(`Listening::\t${port}`));
