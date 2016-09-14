var router = require('express').Router();
var User = require('../models/user');

router.get('/',function(req,res){
  res.render('main/home.ejs');
});

router.get('/about',function(req,res){
  res.render('main/about.ejs');
});

router.get('/products/:id',function(req,res,next){
  Product
    .find({ category = req.params.id})
    .populate('category')
    .exec(function(err, products){
      if(err) return next(err);
      res.render('main/category',{
        products: products
      });
    });
});



module.exports = router;
