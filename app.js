const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set("view engine", "ejs"); // always below express();

app.use(bodyParser.urlencoded({ extended: true })); //for app.post to be triggered
app.use(express.static("public"));

app.get("/", function (req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric"
  };

  let day = today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016

  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  
  let item = req.body.newItem;

  if (req.body.list === "Work" ) {
    workItems.push(item);
    res.redirect("/work");
  } else {
    
     items.push(item);
     res.redirect("/");
  }

 
});

app.get('/work', function(req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems } );
});

app.get("/about", function(req, res) {
  res.render("about");
})

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work")
})

app.listen(3000, () => {
  console.log(`Example app listening`);
});
