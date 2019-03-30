const {Schema, model} = require("mongoose");

const schema = new Schema({
    type: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        unique: true
    }
});

const Pet = model("pet",schema);

module.exports = {Pet};