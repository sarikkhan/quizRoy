const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AnswerStatus = new Schema(
  {
    answerShow: {
        type:Boolean,
        required: true,
    },
    createdAt:{
        type:Date,
        required:true
    }
  },
  { timestamps: true }
);
module.exports= mongoose.model("answerStatus",AnswerStatus);