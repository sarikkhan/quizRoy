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
