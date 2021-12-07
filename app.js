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
       res.send("<h1>I am working</h1><p><ul><li>Alexander<li>Msumba</li></li></ul></p>");
    //    res.write("yerrrrr I am going");
    //    res.write("please wait");
    //    res.send();
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})