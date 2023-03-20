const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const questionStatus = new Schema(
  {
    questionShow: {
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
module.exports= mongoose.model("questionStatus",questionStatus);