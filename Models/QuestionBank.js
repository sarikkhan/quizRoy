const mongoose = require("mongoose");

const QuestionBank = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: [{
        type: String,
        required: true
    }],
    correctAnswer: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['hard', 'easy'],
        required: true
    },
    field:{
        type:String,
        enum:['football','basketball','tennis','WWE','NFL','F1'],
        required:true
    },
    isVisitedBy:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserSchema",
        default:null
    }]  ,
    });
module.exports = mongoose.model("QuestionBank", QuestionBank);