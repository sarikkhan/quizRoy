const { getDate } = require("../dates");
const currentQuestion= require("../Models/currentQuestionNumber");
const Quiz = require("../Models/QuizSchema");
module.exports.getQuestion= async function(){

    //get Question from the database
    return await Quiz.findOne({name:getDate()},(err,doc)=>{
        if(err){
            console.log("Error occured in getQuestion");
            return null;
        }
        if(!doc){
            console.log("Error occured in getQuestion Doc");
            return null;
        }
        return doc.questions[this.getCurrentQuestionNumber];
    // return res.status(200).json()
});
};


module.exports.checkAnswer= async function(num,option){
    let currentQuestionNumber=this.getCurrentQuestionNumber();
    let answer=await Quiz.findOne({name:getDate()},(err,doc)=>{
        if(err)
        {
            console.log("Error occured");
            return null;
        }
        if(!doc)
        {
            console.log("the Quiz you are searching is not available");
            return null;
        }
        if(doc.questions[currentQuestionNumber].answer==option){
            return true;}
        else{
            return false;
        }
    })
}

module.exports.getCurrentQuestionNumber= async function(){
    //return the currentQuestionNumber

    return currentQuestion.findById(process.env.CURRENT_QUESTION_NUMBER_ID).then((doc)=>{
        // console.log("the doc is",doc.currentQuestion);
        return doc.currentQuestion;
    }).catch((err)=>{
        return "Error occured",err;
    });
}

module.exports.incrementCurrentQuestion= async function(){
    let current= this.getCurrentQuestionNumber();

    //increment the current questionNumber for further Use
    const update={currentQuestion:current+1};
    try{
        await currentQuestion.findByIdAndUpdate(process.env.CURRENT_QUESTION_NUMBER_ID,update,{new:false});
        console.log("Success it is")
    }
    catch(err)
    {
        console.log("error occured",err);
        return "Error"
    }
}