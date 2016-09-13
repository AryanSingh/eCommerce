var router = require('express').Router();

router.get('/',function(req,res){
  res.render('main/home.ejs');
});

router.get('/about',function(req,res){
  res.render('main/about.ejs');
});

module.exports = router;
