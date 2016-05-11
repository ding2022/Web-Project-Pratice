var express = require('express');
var router = express.Router();

///* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express-测试版',content : 'I am Fine' });
});


module.exports = router;
