const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");

//console.log(date());

const app = express();



app.set("view engine", "ejs"); // always below express();

app.use(bodyParser.urlencoded({ extended: true })); //for app.post to be triggered
app.use(express.static("public"));

app.get("/", function (req, res) {
 
  const day = date.getDate();

  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  
  const item = req.body.newItem;

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
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work")
})

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
