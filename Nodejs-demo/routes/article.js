var express = require('express');
//var React = require('react');
var router = express.Router();

//component组件
//var ArticleDemo = React.createFactory(require('../components/article'));

///* GET home page. */
router.get('/', function(req, res, next) {
    //var user = userDao.queryById(req, res, next);
    //JSON.stringify(user);
    //ArticleDemo.constructor(user);
    //var demo = React.renderToString(ArticleDemo());
  //res.render('article', { title: 'user',demo:demo});
  res.render('article', { title: 'Express-测试版'});
});


module.exports = router;
