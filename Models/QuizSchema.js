const mongoose = require("mongoose");

const { ParticipantSchema, participants } = require("./ParticipantSchema");

const QuizSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  description: {
    type: String,
    required: true,
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      options: [
        {
          type: String,
          required: true,
        },
      ],
      answer: {
        type: Number,
        required: true,
      },
    },
  ],
  participants: [ParticipantSchema],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    // required: true,
  },
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Participant",
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Quiz", QuizSchema);
