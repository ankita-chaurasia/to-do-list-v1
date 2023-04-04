
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// GLOBALS 

let tasks = ["Buy Food", "Cook Food", "Eat Food"];

//HOME ROUTES

app.get("/", function(req, res){

    res.render("list", {date: date.getDate(), tasks: tasks});

});

app.post("/", function(req, res){

    tasks.push(req.body.newTask);
    res.redirect("/");
});



app.listen(3000, function(){
    console.log("Server running on port 3000");
});