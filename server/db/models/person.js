const {Schema,model} = require("mongoose");

const schema = new Schema({
    name:{
        type:String,
        trim: true,
    },
    age:{
        type:Number,
        required: true,
        validate(value) {
            if (value >= 18) {
                throw new Error("18 or older only.");
            }
        }
    }
});

const Person = model("person",schema);

module.exports = {Person};