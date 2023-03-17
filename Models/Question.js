const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const questionSchema = new Schema(
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
        type: String,
        required: true,
      },
      option3:{
        type: String,
        required: true,
      },
      option4:{
        type: String,
        required: true,
      }
    }],
    createdAt:{
        type:String,
        required:true
    }
  },
  { timestamps: true }
);
module.exports= mongoose.model("question",questionSchema);