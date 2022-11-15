//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/contact", function(req, res){
  res.render("contact");
});

app.get("/experiment1", function(req, res){
  res.render("experiment1");
});

app.get("/exp1/index", function(req, res){
  res.render("exp1/index");
});

app.get("/experiment2", function(req, res){
  res.render("experiment2");
});

app.get("/experiment3", function(req, res){
  res.render("experiment3");
});

app.get("/experiment4", function(req, res){
  res.render("experiment4");
});

app.get("/exp4/index", function(req, res){
  res.render("exp4/index");
});

app.get("/experiment5", function(req, res){
  res.render("experiment5");
});

app.get("/experiment6", function(req, res){
  res.render("experiment6");
});

app.get("/experiment7", function(req, res){
  res.render("experiment7");
});

app.get("/experiment8", function(req, res){
  res.render("experiment8");
});

app.get("/experiment9", function(req, res){
  res.render("experiment9");
});

app.get("/experiment10", function(req, res){
  res.render("experiment10");
});

var port = process.env.PORT;
if(port==null || port==""){
  port=3000;
}

app.listen(port, function() {
  console.log("Server started");
});
