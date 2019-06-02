const {Schema,model} = require("mongoose");

const schema = new Schema({
    name:{
        type:String,
        trim: true,
    },
    age:{
        type:String,
        trim: true,
    }
});

const Person = model("person",schema);

module.exports = {Person};