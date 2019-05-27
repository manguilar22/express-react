const {MongoClient} = require("mongodb");

const {driver:{host,container}} = require("./config");

const url = host;

// MongoDB Driver
const client = MongoClient.connect(url,{useNewUrlParser:true});
client
    .then(res => console.log(`\n[*]\tMongo Driver Connected::\tSuccessfully`))
    .catch(err => console.log(`\n[-]\tMongo Driver Failed.\t${url}`));

module.exports = {client};