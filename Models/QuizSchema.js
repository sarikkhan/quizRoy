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
          option1:{
              type: String,
              required: true,            
          },
          option2:{
            type:String,
            required:true
          },
          option3:{
            type:String,
            required:true
          },
          option4:{
            type:String,
            required:true
          }
          // type: String,
          // required: true,
        },
      ],
      answer: {
        type: Number,
        required: true,
      },
    },
  ],
  participants: [ParticipantSchema],
  // winner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Participant",
  // },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Quiz", QuizSchema);
