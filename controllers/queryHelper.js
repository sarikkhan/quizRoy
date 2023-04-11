// const QuestionBank= require("../Models/QuestionBank");

const QuestionBank = require("../Models/QuestionBank");
const UserSchema = require("../Models/UserSchema")

// module.exports=addQuestion(req){
// }

module.exports.getCurrentQuestion= async function(query,projection){
    return UserSchema.findOne(query,projection);
}
module.exports.getQuestionList= async function(query){
    return QuestionBank.find(query);
}

module.exports.updateUserInQuestion= function(query){
    console.log("herer it is",query.userId);
    return QuestionBank.findByIdAndUpdate(query._id,
    { $addToSet: { isVisitedBy: query.userId  },setDefaultsOnInsert: true },
  { new: true })
}

module.exports.updateCurrentQuestion= function(query,questionNumber){
    return UserSchema.findByIdAndUpdate(query,{$set:{"currentQuestion.questionNumber":questionNumber}},{new:false});
}