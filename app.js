const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

// Global Scope
var items = ["Buy Food", "Lunch Food", "Eat Food"];

// Block Scope

app.get('/', function(req, res) {

    var options = {
        weekday: "long",
        month: "short",
        year: "numeric",
        day: "numeric"
    };

    var today = new Date()

    var day = today.toLocaleDateString("eng-US", options)

    // Date
    // const today = new Date ();
    // var day = "";

    // if (today.getDay() == 0) {
    //     day = "Sunday";
    // } else if (today.getDay() == 1) {
    //     day = "Monday";
    // } else if (today.getDay() == 2) {
    //     day = "Tuesday";
    // } else if (today.getDay() == 3) {
    //     day = "Wednesday";
    // } else if (today.getDay() == 4) {
    //     day = "Thursday";
    // } else if (today.getDay() == 5) {
    //     day = "Friday";
    // } else if (today.getDay() == 6) {
    //     day = "Saturday";
    // } else {
    //     console.log("Your day is + day");
    // }
    // res.render('list', {currentDay: day});

    // if (today.getDay() == 6 || today.getDay() == 0) {
    //     day = "Yay, it's weekend, you can enjoy it."
    // } else {
    //     day = "Boo!. It's Working Day";
    // }

    // res.send(day);

    // getDay method gives the day in number
    // res.send("Current day is: " + today.getDay());

    // res.sendFile(__dirname + "/index.html");

    // res.write("<h1> Hello Wednesday </h1>");
    // res.write("<p> I am learning EJS today. It's wonderful </p>");

    // res.send();

    res.render("list", {currentDay: day, newItem: items});
});

app.post("/", function(req, res){

   var item = req.body.newlistItem

    items.push(item);

    res.redirect("/");


});

app.listen(3000, function() {
    console.log("Server is running on port 3000.")
});