var express = require('express');
var morgan  = require('morgan');
// var mongoose = require('mongoose');

var app = express();

app.use(morgan('dev'));

app.get('/',function(req,res){
  var name = "batman";
  res.json("My name is " + name);
});



app.listen(3000,function(err){
  if(err) throw err;
  console.log("server is running");
});
