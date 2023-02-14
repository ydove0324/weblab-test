/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const MY_NAME = "y_dove";
const express = require("express");
const story = require("./models/story.js");

// import models so we can interact with the database
const Story = require("./models/story.js");
// TODO (step1) import the comment model
const Comment = require("./models/comment.js");
const comment = require("./models/comment.js");
// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

router.get("/stories", (req, res) => {
  Story.find({}).then((stories) => {
    res.send(stories);
  });
  // TODO (step1) get all the stories from the database and send response back to client
});

router.post("/story", (req, res) => {
  // TODO (step1) create a new Story document and put it into the collection using the model
  const newstory = new Story({
    creator_name: MY_NAME,
    content: req.body.content,
  });
  newstory.save().then((story) => {
    res.send(story);
  });
});

router.get("/comment", (req, res) => {
  Comment.find({
    parent: req.query.parent,
    /* TODO (step2) input the parent parameter here*/
  }).then((comments) => {
    res.send(comments);
  });
});

router.post("/comment", (req, res) => {
  const newcomment = new Comment({
    content: req.body.content,
    creator_name: MY_NAME,
    parent: req.body.parent,
  });
  newcomment.save().then((comment) => {
    res.send(comment);
  });
  // TODO (step2) create a new Comment document and put it into the collection using the model
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
