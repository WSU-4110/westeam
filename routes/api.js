const express = require("express");
const router = express.Router();
const ForumPost = require("../models/forumpost");
const path = require("path");
var ObjectID = require("mongodb").ObjectID;

//Routes
router.post("/createpost", (req, res) => {
  const data = req.body;

  const newForumPost = new ForumPost(data);

  newForumPost.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
      console.log("Post request failed");
    } else {
      console.log("Post request succeeded.");
      console.log(data);
    }
  });
});

router.get("/getposts", (req, res) => {
  ForumPost.find(function (err, returnedPosts) {
    if (err) {
      return console.error(err);
    }
    res.send(returnedPosts);
    console.log(returnedPosts);
  });
});

router.put("/reply", (req, res) => {
  const data = req.body;

  const update = {
    $push: {
      comments: {
        comURL: data.comments.comURL,
        comBody: data.comments.comBody,
        comId: data.comments.comId,
      },
    },
  };

  console.log(data);
  ForumPost.findByIdAndUpdate(data._id, update, { new: true }, (err, todo) => {
    if (err) return res.status(500).send(err);
    return res.send(todo);
  });
});

module.exports = router;
