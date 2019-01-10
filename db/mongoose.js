require("./config");
const mongoose = require("mongoose");

const mongo = mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true})
                      .then(res => console.log(`Connected::\t${res}`))
                      .catch(err => console.log("Failed to connect."));

module.exports = {mongo};
