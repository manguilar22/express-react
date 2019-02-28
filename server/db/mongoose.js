const mongoose = require("mongoose");

const mongo = mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true})
                      .then(res => console.log(`\n[*]\tMongoDB Connected::\tSuccessfully`))
                      .catch(err => console.log("\n[-]\tFailed to connect mongodb."));
/*
mongo.createCollection("persons")
	.then(res => console.log("\n[+]\t Successfully created collection: persons"))
	.catch(err => console.log("\n[-]\t Failed creating collection: persons")); 
*/

module.exports = {mongo};
