const {Schema, model} = require("mongoose");

const schema = new Schema({
    type: {
        type: String
    },
    name: {
        type: String
    }
});

schema.methods.findByType = cb => {
  return this.model("pet").find({type:this.type},cb);
};

const Pet = model("pet",schema);

module.exports = {Pet};