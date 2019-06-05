const {Schema,model} = require("mongoose");
const validator = require("validator");

const schema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
        validate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error("Password can not be password");
            }
        }
    }
});


const User = model("user",schema);

module.exports = {User};
