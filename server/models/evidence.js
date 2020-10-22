var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  author: String,
  title: String,
  journal: String,
  year: String,
  volume: String,
  number: String,
  pages: String,
  month: String,
  cred : String
});

var Post = mongoose.model("Evidence", PostSchema);
module.exports = Post;