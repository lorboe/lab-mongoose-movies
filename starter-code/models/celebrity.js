const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  ocupation: {type: Array, default: '_unknown_'},
  catchPhrase: {type: String},
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;