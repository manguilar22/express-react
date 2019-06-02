const {Schema, model} = require("mongoose");

const schema = new Schema({
    date: {
        type: String,
        default: new Date().toString(),
    },
    type: {
        type: String,
        required: String,
        trim: true,
    },
    name: {
        type: String,
        required: String,
        trim: true,
    },
    image: {
        type: String,
        required: String,
    }
});

const Pet = model("pet",schema);

module.exports = {Pet};