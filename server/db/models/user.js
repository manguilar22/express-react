const {Schema,model} = require("mongoose");

/**
 * User Schema for React Front-End
 * @type {*|Mongoose.Schema}
 */
const schema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    }
});

const User = model("user",schema);

exports.module = User;