const mongoose = require("mongoose");

const ParticipantSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
  eliminated: {
    type: Boolean,
    default: false,
  },
});

const Participant = mongoose.model("Participant", ParticipantSchema);
module.exports = { ParticipantSchema, Participant };
