const queryHelper = require("./queryHelper");
const QuestionBank=require("../Models/QuestionBank");
const UserSchema = require("../Models/UserSchema");
module.exports.addQuestion=async function(req){
    const{question,options,correctAnswer,category,field}= req.body;
    const questionBank= new QuestionBank({
      question:question,
      options:options,
      correctAnswer:correctAnswer,
      category:category,
      field:field
    })
    return questionBank.save();
}

module.exports.getQuestionService=async function(req){
    const email="643535c99914a3bcf54923d1";
    const field="basketball";
    const query={_id:email};
    const projection={
        currentQuestion:1,
        _id:1
    }
    const currentUser=await queryHelper.getCurrentQuestion(query,projection);
    let queryForDb={field:field, isVisitedBy:{$nin:[email]}}
   
    if(currentUser.currentQuestion.questionNumber<2){
        queryForDb["category"]="easy";
    }else{
        queryForDb["category"]="hard";
    }
    const questionList=await queryHelper.getQuestionList(queryForDb);
    if(questionList.length<1){
        return {value:false,message:"Question are over"};
    }
    let rand= Math.random()*questionList.length;
    let randomInt=Math.floor(rand);
    const questionToDisplay= {questionName:questionList[randomInt].question, options:questionList[randomInt].options};
    const querytoUpdate={_id:questionList[randomInt].id,userId:currentUser.id};
    await queryHelper.updateUserInQuestion(querytoUpdate);
    let updatedQuestioNumber=currentUser.currentQuestion.questionNumber+1;
    if(updatedQuestioNumber==5){
        updatedQuestioNumber=0;
    }
    await queryHelper.updateCurrentQuestion(email,updatedQuestioNumber);
    return {value:true,message:questionToDisplay};

}
