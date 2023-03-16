

module.exports.attachSocketIOhandlers = function(io) {
  io.on("connection", (socket) => {
    console.log("A user connected");

    // Define the message event handler
    socket.on("answer", (data) => {
    
      console.log(`Message received: ${data}`);


      // Send the message back to the client
      socket.emit("message", `You sent: ${data}`);
    });

    // Define any other event handlers here
    // ...
  });
};
