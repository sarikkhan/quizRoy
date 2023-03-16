// exports.start = async (req, res, next) => {};
const {getQuestion,checkAnswer, getCurrentQuestionNumber, incrementCurrentQuestion}=require("./questionAndAnswers");
const dates=require("../dates");
// exports.getQuestions = async (req, res, next) => {
//   res.status(200).json({
//     message: "you got all questions here",
//     questions: [1, 2, 3, 4, 5, 6],
//   });
// };

exports.insertQuestions = async (req, res, next) => {
  res.status(200).json({
    message: "insert questions post",
  });
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

exports.home = async (req, res, io) => {
  // let date = new Date();
  // let hours = date
  //   .getHours()
  //   .toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  // let minutes = date
  //   .getMinutes()
  //   .toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  // let seconds = date
  //   .getSeconds()
  //   .toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  
  let timejson=dates.time();
  console.log(timejson.hour,timejson.minutes);
  if (timejson.hour >= 12 && timejson.minutes >= 0) {
    let currentQuestionNumber= await getCurrentQuestionNumber();
    console.log(currentQuestionNumber);
    let question = getQuestion(currentQuestionNumber);
    io.emit("questions", question);
    return res.status(200).json({
      message: "quiz Started",
    });
  }
  else{

    return res.status(200).json({
      message: "quiz will start at 9:30pm",
    });
  }

};

