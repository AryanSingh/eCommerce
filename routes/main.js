var router = require('express').Router();
var User = require('../models/user');

router.get('/',function(req,res){
  res.render('main/home.ejs');
});

router.get('/about',function(req,res){
  res.render('main/about.ejs');
});

router.get('/users',function(req,res){
  User.find({}, function(err,users){
    res.json(users);
  });
});

module.exports = router;
