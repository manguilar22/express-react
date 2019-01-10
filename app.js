const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongo = require("./db/mongoose");
const port = process.env.PORT || 5000;

/**
 * Data-Imports
**/
const persons = require("./data/persons");
const postedData = [];
const test = [];
/**
 * Express App
 */
const registry = require("./routes/registry");
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.use("/registry",registry);

app.get("/",(req,res) => res.send("works"));

app.get("/persons",(req,res) => res.json(persons));

app.listen(port , () => console.log(`Listening::\t${port}`));
