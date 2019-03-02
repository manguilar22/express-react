const {connect} = require("mongoose");

const {mongo:{host,port, app}} = require("./config");

const url = `mongodb://${"mongo"}:${port}/${app}`;

const database = connect(url,{useNewUrlParser:true})
                      .then(res => console.log(`\n[*]\tMongoDB Connected::\tSuccessfully`))
                      .catch(err => console.log("\n[-]\tFailed to connect mongodb."));

module.exports = database;
