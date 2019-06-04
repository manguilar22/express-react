const {MongoClient} = require("mongodb");

const {driver:{host,container,settings}} = require("./config");

const url = host;

// MongoDB Driver
const client = MongoClient.connect(url,settings);
client
    .then(res => console.log(`\n[*]\tMongo Driver Connected::\tSuccessfully`))
    .catch(err => console.log(`\n[-]\tMongo Driver Failed.\t${url}`));

module.exports = {client};