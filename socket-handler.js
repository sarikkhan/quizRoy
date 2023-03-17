const { getCurrentQuestionNumber } = require("./controllers/questionAndAnswers");
const { getDate } = require("./dates");
const { Participant } = require("./Models/ParticipantSchema");
const Quiz= require("./Models/QuizSchema");

module.exports.attachSocketIOhandlers = function(io) {
  io.on("connection", (socket) => {
    console.log("A user connected");
    // let currentQuiz=Quiz.findOne({name:})
    // Define the message event handler
    let name=getDate()
    let quizData=Quiz.findOne({name:name},(err,doc)=>{
      if(err)
      {
        console.log("error occured");
        return "Error";
      }
      if(!doc){
        console.log("no Such quiz found");
        return "Error while finding quiz";
      }

      return doc;
    })


   let participant=Participant.findOne({socketId:socket.id},(error,participant)=>{
      if(err){
        console.log("Participant db errror");
        return null;
      }
      if(!participant){
        console.log("participant not found");
        return null;
      }
      return participant;
    })



    socket.on("answer", (data) => {
      //checking the answer and sending the response
      if(data<=0 || data>4)
      {
        socket.emit("play_Fair",data);
        return;
      }
      let currentQuestionNumber=getCurrentQuestionNumber();
    
        // find the quiz by name and remove the participant with the given id


        if(data==quizData.questions[currentQuestionNumber].answer)
        {
          socket.emit("CorrectAnswer",data);
        }
        else{
          socket.emit("WrongAnswer",data);
          
          //removed the user from Quiz Participant List
          Quiz.updateOne(
            { name: name },
            { $pull: { participants: { socketId: socket.id } } },
            (err, result) => {
              if (err) {
                socket.emit("dbError",err);
                console.error("removing participant error",err);
                return;
              }
              if(!result)
              {
                socket.emit("play_fair","you are already eliminated");
                return;
              }
              console.log("Participant removed from quiz:", result);
            }
          );    
        }
    });

    // Define any other event handlers here
    // ...
  });
};
