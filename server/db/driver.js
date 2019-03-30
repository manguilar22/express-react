const {MongoClient} = require("mongodb");

const {driver: {host, container}} = require("./config");

// MongoDB Driver
const driver = MongoClient.connect(container)
    .then(res => console.log(`\n[*]\tMongo Driver Connected::\tSuccessfully`))
    .catch(err => console.log("\n[-]\tMongo Driver Failed."));

module.exports = driver;