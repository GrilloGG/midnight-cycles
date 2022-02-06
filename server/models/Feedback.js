const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const feedbackSchema = new Schema({
  feedbackText: {
    type: String,
    required: "You need to leave a review!",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  feedbackAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp),
  },
});

const Feedback = model("Feedback", feedbackSchema);

module.exports = Feedback;
