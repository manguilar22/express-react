const {MongoClient} = require("mongodb");

const {driver:{host,container}} = require("./config");

const url = container;

// MongoDB Driver
const driver = MongoClient.connect(url,{useNewUrlParser:true})
    .then(res => console.log(`\n[*]\tMongo Driver Connected::\tSuccessfully`))
    .catch(err => console.log(`\n[-]\tMongo Driver Failed.\t${url}`));

module.exports = {driver};