const path = require("path");
const express = require("express");
const app = express();


// 设置静态目录
app.use(express.static(__dirname));

// 设置项目的首页
app.get('/',(req,res)=>{
   res.sendFile(path.resolve(__dirname,'index.html'));
});

// 监听port 8800
app.listen(8800,()=>{
   console.log("cart server is listening on port 8800") ;
});
