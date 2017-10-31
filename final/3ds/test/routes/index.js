var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*GET csv to parse to JSON */
router.get('/it', function(req, res, next) {
  res.render('it', { title: 'it' });
});

router.post('/postit', function(req,res,next){
  
})
module.exports = router;
