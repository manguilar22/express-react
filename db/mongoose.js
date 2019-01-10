const mongoose = require("mongoose");

const mongo = mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true})
                      .then(res => console.log(`MongoDB Connected::\tSuccessfully`))
                      .catch(err => console.log("Failed to connect mongodb."));

module.exports = {mongo};
