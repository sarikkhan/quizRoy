const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const currentQuestion = new Schema(
  {
    currentQuestion : {
      type: Number,
      required: true,
    },
    
  },
  { timestamps: true }
);

module.exports= mongoose.model("currentQuestion",currentQuestion);