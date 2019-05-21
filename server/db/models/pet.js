const {Schema, model} = require("mongoose");

const schema = new Schema({
    type: {
        type: String
    },
    name: {
        type: String
    }
});

const Pet = model("pets",schema);

module.exports = {Pet};