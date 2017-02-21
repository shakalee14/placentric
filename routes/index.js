var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('splash-page', { title: 'La Placenta' });
});

router.get('/home', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next){
  res.render('contact')
})

router.get('/services', function(req, res, next){
  res.render('services')
})

router.get('/media', function(req, res, next){
  res.render('media')
})

module.exports = router;
