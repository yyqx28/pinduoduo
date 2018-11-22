const path = require("path");
const express = require("express");
const app = express();
const goods = require("./data/goods");

// 设置静态目录
app.use(express.static(__dirname));

// 设置项目的首页
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'));
});

// 搭建测试的API
app.get('/api/goods',(req,res)=>{
    res.jsonp(goods);
});

// 监听port 8080
app.listen(8080,()=>{
    console.log("cart server is listening on port 8080") ;
});