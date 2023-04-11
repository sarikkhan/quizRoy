// exports.start = async (req, res, next) => {};
const {getQuestion,checkAnswer, getCurrentQuestionNumber, incrementCurrentQuestion}=require("./questionAndAnswers");
const dates=require("../dates");
const Quiz= require("../Models/QuizSchema");
const Question=require("../Models/Question");
const QuestionStatus = require("../Models/QuestionStatus");
const { query } = require("express");
const { sendQuestion, questionStatus, answerStatus } = require("./questionStatus");
const QuestionBank = require("../Models/QuestionBank");
const { addQuestion, getQuestionService } = require("./services");
const UserSchema= require("../Models/UserSchema");
exports.insertQuestions = async (req, res, next) => {
  try{

    const questionAdded= await addQuestion(req);
    console.log("question Added", questionAdded);
    return res.status(200).send({message:"Added Sucesfullly"});
  }
  catch(error){
    console.log("error is", error);
    return res.status(500).send({message:"Error Occured while data to database"});
  }
};
exports.dropQuestions = async (req, res, next) => {

  res.status(200).json({
    message: "drop questons",
  });
};

exports.getResults = async (req, res, next) => {
  res.status(200).json({
    message: "got the result",
  });
};

// exports.home = async (req, res, io) => {
  
//   let timejson=dates.time();
//   // console.log(timejson.hour,timejson.minutes);
//   if (timejson.hour >= 0 && timejson.minutes >= 0) {
//     dates.getDate();
//     let currentQuestionNumber= await getCurrentQuestionNumber();
//     // console.log(currentQuestionNumber);
//     let question = getQuestion(currentQuestionNumber);
//     io.emit("questions", question);
//     return res.status(200).json({
//       message: "quiz Started",
//     });
//   }
//   else{
//     return res.status(200).json({
//       message: "quiz will start at 9:30pm",
//     });
//   }
// };

exports.home=async(req,res)=>{
  let questionStatus= questionStatus();
  let date= new Date();
  if(questionStatus.questionShow==true)
  {
    let question= getQuestion();
    return res.status(200).json({
      message:question,
      timeleft:date-questionStatus.date
    })
  }
  else{  
    return res.status(200).json({
      message:"Quiz will start at 9:30pm"
    })
  } 
}

// exports.sendQuestionPanel= async(req,res,next)=>{
//   let questionNumber= req.body.num;
//   let status=sendQuestion();
//   if(status==null){
//     return res.status(500).json({
//       message:"Error occured while Updating the doc"
//     })
//   }

//   return res.status(200).json({
//     message:"Updated Successfully"
//   })
// }


// exports.verifyAnswer= async(req,res,next)=>{  
//   let date=new Date();
//   let timeLeft=date-questionStatus().createdAt;
//   if(timeLeft>10000 || timeleft<1000){
//     return res.status(500).json({
//       message:"late"
//     })
//   }
//   setTimeout(function(){
//     if(checkAnswer(getCurrentQuestionNumber(),req.body.answer)){
//     return res.status(200).json({
//       message:"correct"
//     })}
//     else{
//       return res.status(200).json({
//         message:"incorrect"
//       })
//     }
//   },timeLeft)
// }   

// exports.updateQuestion= function(req,res,next){
//   incrementCurrentQuestion();
//   return res.status(200).json({
//     message:"question_incemented"
//   })
// }


// function removeParticipant(userid){
//   Quiz.updateOne(
//     { name: dates.getDate() },
//     { $pull: { participants: { user: userid } } },
//     (err, result) => {
//     if (err) {
//       return false;
//       }
//       if(!result)
//       {
//         return true;
//       }
//       return true;
//     }
//   );
// }


module.exports.getQuestion= async (req,res)=>{
    try{
      const questionToDisplay= await getQuestionService(req);
      if(!questionToDisplay.value)
      {
        return res.status(401).send({message:questionToDisplay.message});
      }
      return res.status(200).send(questionToDisplay.message);
    }
    catch(error){
      console.log("error is",error);
      return res.status(500).send("error is");
    }
}

module.exports.signUp=async function(req,res,next){
    try{
        const{name,email,password,rewards}=req.body;
        const user= new UserSchema({
            name,
            email,
            password,
            rewards,
        });
        await user.save();
        return res.send("User created Succssfully");
    }
    catch(error){
        console.log("error at signup",error);
        return res.send("error occured");
    }
}


module.exports.checkAnswer= async function(req,res){

}

