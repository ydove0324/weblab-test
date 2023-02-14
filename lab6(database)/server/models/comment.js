// TODO (step0) import mongoose

// TODO (step0) define your Comment schema

// TODO (step0) create and export the model for the Comment schema

const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  creator_name: String,
  content: String,
  parent: String,
});

module.exports = mongoose.model("comment", CommentSchema);
