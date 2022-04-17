const express = require("express"); // load express module which returns a function
const app = express(); //represent our application

app.get("/", function (req, res) {
  //to get a response
  res.send("Hello World..!!"); //this sends "hello world" message
});

app.listen(3000, console.log("server is running on port 3000")); //local host is given as 3000
