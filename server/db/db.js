const {connect} = require("mongoose");

const {container:{host,port, app}} = require("./config");

const url = `mongodb://${host}:${port}/${app}`;

const database = connect(url,{useNewUrlParser:true})
                      .then(res => console.log(`\n[*]\tMongoDB Connected::\tSuccessfully`))
                      .catch(err => console.log("\n[-]\tFailed to connect mongodb."));

module.exports = database;
