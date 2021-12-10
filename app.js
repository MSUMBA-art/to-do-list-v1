const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs'); // always below express();

//const port = 3000

app.get('/', function(req, res)  {
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    // if (currentDay === 6 || currentDay=== 0) {
    //   day = "Weekend";
    //   res.render('list', {kindOfDay: day});
    //   //res.sendFile(__dirname + "/Weekend.html");
    // } else {
    //   day = "Weekeday"
      
    //   //res.sendFile(__dirname + "/Weekday.html")
    // }

    // switch (currentDay) {
    //   case 0:
    //     day = "Sunday";
    //     break;

    //      case 1:
    //     day = "Monday";
    //     break;

    //      case 2:
    //     day = "Tuesday";
    //     break;

    //      case 3:
    //     day = "Wednesday";
    //     break;

    //      case 4:
    //     day = "Thursday";
    //     break;

    //      case 5:
    //     day = "Friday";
    //     break;

    //      case 6:
    //     day = "Saturday";
    //     break;
    
      
    //     console.log("Erro: Current day is " + currentDay);
    //     default:
    // }

    switch (currentDay) {
      case 0:
        day = "Sunday";
        break;

         case 1:
        day = "Monday";
        break;

         case 2:
        day = "Tuesday";
        break;

         case 3:
        day = "Wednesday";
        break;

         case 4:
        day = "Thursday";
        break;

         case 5:
        day = "Friday, Woozaaa weekend!!!";
        break;

         case 6:
        day = "Saturday";
        break;
    
      default:
         console.log("Erro: Current day is " + currentDay);
    }

     res.render('list', {kindOfDay: day});
});

app.listen(3000, () => {
  console.log(`Example app listening`)
})