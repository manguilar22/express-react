const {Schema,model} = require("mongoose");

const schema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        trim: true,
    }
});


const User = model("user",schema);

module.exports = {User};
