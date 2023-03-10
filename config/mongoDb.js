const mongoose= require('mongoose');

const db=mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("database err ", err);
  });

module.exports=db;