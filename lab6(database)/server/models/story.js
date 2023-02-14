// TODO (step0) import mongoose

// TODO (step0) define your Story schema

// TODO (step0) create and export the model for the Story schema
const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
  creator_name: String,
  content: String,
});

module.exports = mongoose.model("story", StorySchema);
