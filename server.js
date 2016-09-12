var express = require('express');
var morgan  = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var ejs = require('ejs');
var ejsEngine = require('ejs-mate');

var User = require('./models/user');

var app = express();

mongoose.connect('mongodb://rails2track:a1234@ds029466.mlab.com:29466/ecommerce', function(err){
  if(err){
    console.log(err);
  }
  else {
    console.log('connected to database');
  }
})

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.engine('ejs', ejsEngine);
app.set('view engine', ejs);


app.post('/create-user',function(req,res,next){
  var user = new User();
  user.profile.name = req.body.name;
  user.password = req.body.password;
  user.email = req.body.email;
  user.save(function(err){
    if(err) return next(err);
    res.json("Successfully created a new user");
  })
})

app.get('/',function(req,res){
  res.render('main/home.ejs');
});

app.get('/about',function(req,res){
  res.render('main/about.ejs');
});


app.listen(3000,function(err){
  if(err) throw err;
  console.log("server is running at port: 3000");
});
