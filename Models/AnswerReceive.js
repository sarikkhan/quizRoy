const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const answerReceive = new Schema(
  {
    answerReceive: {
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
module.exports= mongoose.model("answerReceive",answerReceive);