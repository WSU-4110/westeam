const mongoose = require("mongoose");

//Schematic for data models
const Schema = mongoose.Schema;
const newPostSchema = new Schema({
  imageURL: String,
  forumBody: String,
  forumId: String,
  comments: [{ comURL: String, comBody: String, comId: String }],
});

//model = mongoose.model(<name of model>. <schematic for model>)
const ForumPost = new mongoose.model("ForumPost", newPostSchema);

module.exports = ForumPost;
