// exports.start = async (req, res, next) => {};
const {getQuestion,checkAnswer, getCurrentQuestionNumber, incrementCurrentQuestion}=require("./questionAndAnswers");
const dates=require("../dates");
const Quiz= require("../Models/QuizSchema");
const Question=require("../Models/Question");
// exports.getQuestions = async (req, res, next) => {
//   res.status(200).json({
//     message: "you got all questions here",
//     questions: [1, 2, 3, 4, 5, 6],
//   });
// };

exports.insertQuestions = async (req, res, next) => {

  let day=  dates.getDate();
  const{description,questions,completed}=req.body;
  // let questions={
  //   question:req.question,
  //   options:{
  //     option1:req.question.option1,
  //     option2:req.question.option2,
  //     option3:req.question.option3,
  //     option4:req.question.option4,
  //   },
  //   answer:req.question.answer
  // }
  let quizUpdate=new Quiz({
    name:day,
    description,
    questions,
    completed
  })
  quizUpdate.save((err,doc)=>{
    if(err)
    {
      console.log("error occured while putting the quiz");
      return res.status(404).json({message: "Error",
      reason:err});
    }
    console.log("Sucessfully made the quiz");
    return res.status(200).json({message:"Success"});
  })
  // res.status(200).json({
  //   message: "insert questions post",
  // });
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
  let timejson=dates.time();
  if (timejson.hour >= 0 && timejson.minutes >= 0) {
    let question=await getQuestion(1);
    let  timeCreatedAt= question.createdAt;
    let currentDate= new Date();
    return res.status(200).json({
      questionDetails:question,
      timeLeft:timeCreatedAt+10-currentDate
    })
  }
  else{
    return res.status(200).json({
      message:"Quiz will start at 9:30pm"
    })
  }
}

exports.checkAnswer= async(req,res,next)=>{
  //check whether the answer is co
} 

// function displayQuestion(res,currentNumber){
//     Question.findById(process.env.CURREN_QUESTION);
//     return res.status(200).json()
// }

