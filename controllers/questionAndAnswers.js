const currentQuestion= require("../Models/currentQuestionNumber");
module.exports.getQuestion= function(num){

    //get Question from the database

    return Question.findById(process.env.CURREN_QUESTION).then((doc)=>{
        if(!doc)
            return null;
        return doc;
    }).catch((err)=>{
        return null;
    });
    // return res.status(200).json()
}


module.exports.checkAnswer= function(num,option){
    //check whether the answer is correct or not
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

module.exports.incrementCurrentQuestion= async function(current){

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