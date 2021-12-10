const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"] ;

app.set('view engine', 'ejs'); // always below express();

app.use(bodyParser.urlencoded( {extended: true})) //for app.post to be triggered
app.use(express.static("public"))

app.get('/', function(req, res)  {
    let today = new Date();
   
    let options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    };

   

    let day = today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016

     res.render('list', {kindOfDay: day, newListItems: items});

       
});

app.post("/", function (req, res) {
        let item = req.body.newItem;

        items.push(item)
         res.redirect("/");

    })



app.listen( process.env.PORT || 3000, () => {
  console.log(`Example app listening`)
})