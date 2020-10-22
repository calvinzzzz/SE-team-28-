var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  username: String,
  password: String
});

var Post = mongoose.model("Login", PostSchema);
module.exports = Post;