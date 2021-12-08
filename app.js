const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000

app.get('/', function(req, res)  {
    var today = new Date();
    var currentDay = today.getDate();

    if (currentDay === 7 || currentDay === 0) {
        res.write("yerrrrr it is weekend");
    } else {
      // res.write("<p>Alexander ms</p>");
      // res.write("<h1>yerrrrr I am going</h1>");
      // res.write("<i>please wait</i>");
      // res.send();
      res.sendFile(__dirname + "/index.html")
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})