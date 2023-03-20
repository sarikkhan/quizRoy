// exports.start = async (req, res, next) => {};
const {getQuestion,checkAnswer, getCurrentQuestionNumber, incrementCurrentQuestion}=require("./questionAndAnswers");
const dates=require("../dates");
const Quiz= require("../Models/QuizSchema");
const Question=require("../Models/Question");
const QuestionStatus = require("../Models/QuestionStatus");
const { query } = require("express");
const { sendQuestion, questionStatus, answerStatus } = require("./questionStatus");
// exports.getQuestions = async (req, res, next) => {
//   res.status(200).json({
//     message: "you got all questions here",
//     questions: [1, 2, 3, 4, 5, 6],
//   });
// };

exports.insertQuestions = async (req, res, next) => {

  let day=  dates.getDate();
  const{description,questions,completed}=req.body;
  let quizUpdate=new Quiz({
    name:day,
    description,
    questions,
    completed
  })
  try{
    await quizUpdate.save();
  }
  catch(err){
    return res.status(500).json
  }

//   quizUpdate.save((err,doc)=>{
//     if(err)
//     {
//       console.log("error occured while putting the quiz");
//       return res.status(404).json({message: "Error",
//       reason:err});
//     }
//     console.log("Sucessfully made the quiz");
//     return res.status(200).json({message:"Success"});
//   })
// };
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

exports.sendQuestionPanel= async(req,res,next)=>{
  let questionNumber= req.body.num;
  let status=sendQuestion();
  if(status==null){
    return res.status(500).json({
      message:"Error occured while Updating the doc"
    })
  }

  return res.status(200).json({
    message:"Updated Successfully"
  })
}


exports.verifyAnswer= async(req,res,next)=>{  
  let date=new Date();
  let timeLeft=date-questionStatus().createdAt;
  if(timeLeft>10000 || timeleft<1000){
    return res.status(500).json({
      message:"late"
    })
  }
  setTimeout(function(){
    if(checkAnswer(getCurrentQuestionNumber(),req.body.answer)){
    return res.status(200).json({
      message:"correct"
    })}
    else{
      return res.status(200).json({
        message:"incorrect"
      })
    }
  },timeLeft)
}   

exports.updateQuestion= function(req,res,next){
  incrementCurrentQuestion();
  return res.status(200).json({
    message:"question_incemented"
  })
}


function removeParticipant(userid){
  Quiz.updateOne(
    { name: dates.getDate() },
    { $pull: { participants: { user: userid } } },
    (err, result) => {
    if (err) {
      return false;
      }
      if(!result)
      {
        return true;
      }
      return true;
    }
  );
}

