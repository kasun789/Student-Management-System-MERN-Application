const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Subject:{
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Posts", postSchema);
