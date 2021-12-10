const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"] ;

app.set('view engine', 'ejs'); // always below express();

app.use(bodyParser.urlencoded( {extended: true})) //for app.post to be triggered

app.get('/', function(req, res)  {
    var today = new Date();
   
    var options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    };

   

    var day = today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016

     res.render('list', {kindOfDay: day, newListItems: items});

       
});

app.post("/", function (req, res) {
        var item = req.body.newItem;

        items.push(item)
         res.redirect("/");

    })



app.listen(3000, () => {
  console.log(`Example app listening`)
})