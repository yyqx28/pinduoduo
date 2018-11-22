var express = require('express');
var router = express.Router();

var recomgoods = require("../data/recomgoods");
/* GET home page. */
router.get('/', function(req, res, next) {

    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");

    //修改让其返回对象{去除花括号}
    res.jsonp(recomgoods);
});
module.exports = router;

