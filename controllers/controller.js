// exports.start = async (req, res, next) => {};

exports.getQuestions = async (req, res, next) => {
  res.status(200).json({
    message: "you got all questions here",
    questions: [1, 2, 3, 4, 5, 6],
  });
};

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

exports.home = (req, res, io) => {
  let date = new Date();
  let hours = date
    .getHours()
    .toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  let minutes = date
    .getMinutes()
    .toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  let seconds = date
    .getSeconds()
    .toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  if (hours > 9 && minutes >= 30 && seconds < 10) {
    let question = getQuestion(1);
    io.emit("questions", question);
    return res.status(200).json({
      message: "quiz Started",
    });
  }

  return res.status(200).json({
    message: "quiz will start at 9:30pm",
  });
};

function getQuestion(questionNumber) {}
