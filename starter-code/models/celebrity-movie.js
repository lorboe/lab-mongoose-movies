const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebrityMovieSchema = new Schema({
 _movie: {type: Schema.Types.ObjectId, ref: "Movie"},
 _celebrity: {type: Schema.Types.ObjectId, ref: "Celebrity"}
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const celebrityMovie = mongoose.model("celebrityMovie", celebrityMovieSchema);

module.exports = celebrityMovie;