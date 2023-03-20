const AnswerReceive = require("../Models/AnswerReceive");
const AnswerStatus = require("../Models/AnswerStatus");
const QuestionStatus = require("../Models/QuestionStatus");

module.exports.stopSendingQuestions=async function stopSendingQuestions(){
    const update={questionShow:false};
    try{
        await QuestionStatus.findByIdAndUpdate(process.env.QUESTION_STATUS,update,{new:false})
    }
    catch(err){
        console.log("Error occured");
        return null;
    }
}

module.exports.updateSendQuestion=async function updateSendQuestion(){
    let date= new Date();
    const update={questionShow:true,createdAt:date};
    try{
        return await QuestionStatus.findByIdAndUpdate(process.env.QUESTION_STATUS,update,{new:false})
    }
    catch(err){
        console.log("Error occured");
        return null;
    }  
}
module.exports.updateSendAnswer= async function updateSendAnswer(){

}
module.exports.questionStatus=async function questionStatus(){
    try{
        let status=await QuestionStatus.findById(process.env.QUESTION_STATUS);
        return status;
    }
    catch(err){
        console.log("Error in questionStatus");
        return {questionShow:false};
    }
}

// module.exports.stopReceivingAnswer=async function stopReceivingAnswer(){
//     const update={receiveAnswer:false};
//     try{
//         return await AnswerReceive.findByIdAndUpdate(process.env.ANSWER_RECEIVE,update,{new:false})
//     }
//     catch(err){
//         console.log("Error occured");
//         return null;
//     }
// }

// // module.exports.sendAnswerResponse=function sendAnswerResponse(answerReceived){

// // }

// module.exports.startReceivingAnswer= async function startReceivingAnswer(answerReceived){
//     const update={receiveAnswer:true};
//     try{
//         return await AnswerReceive.findByIdAndUpdate(process.env.ANSWER_RECEIVE,update,{new:false})
//     }
//     catch(err){
//         console.log("Error occured");
//         return null;
//     }
    
// }

// module.exports.answerStatus= async function answerStatus(){
//     try{
//         let answerStatus= await AnswerStatus.findById(process.env.ANSWERSTATUS);
//         return answerStatus;
//     }
//     catch(err){
//         console.log("Error Occured");
//         return {answerShow:false};
//     }

// }