const express = require("express"); // load express module which returns a function
const app = express(); //represent our application

app.get("/", function (req, res) {
  //to get a response
  res.send("Hello World..!!"); //this sends "hello world" message
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`listening to port ${PORT}`);
}); //local host is given as 3000
