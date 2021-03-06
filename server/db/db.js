const {connect} = require("mongoose");

const {driver: {host,container,settings} } = require("./config");

const url = host;

const database = connect(url,settings)
                      .then(res => console.log(`\n[*]\tMongoDB Connected::\tSuccessfully`))
                      .catch(err => console.log(`\n[-]\tFailed to connect mongodb.\t${url}`));

module.exports = database;
