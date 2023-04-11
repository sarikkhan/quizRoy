const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  rewards: {
    type: String,
    required: true,
  },
  currentScore:{
    type:Number,
    default:0
  },
  currentQuestion:{
    questionNumber:{
      type:Number,
      default:0
    },
    questionId:{
     type:mongoose.Schema.Types.ObjectId,
      ref:"QuestionBank",

    },
    startTime:{
      type:String,
      default:"0"
    }
  },
});

module.exports = mongoose.model("User", UserSchema);
