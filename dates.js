 
module.exports.time=function(){
    let date = new Date();
    let hour= date.getHours().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    let minutes= date.getMinutes().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    let seconds= date.getSeconds().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    console.log(hour);                     
    let timejson={
        hour:hour,
        minutes:minutes,
        seconds:seconds
    }
    return timejson;
 };
// module.exports.minutes = function(){
//     return date.getMinutes().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });}
// module.exports.seconds = function(){
//     return date.getSeconds().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });}