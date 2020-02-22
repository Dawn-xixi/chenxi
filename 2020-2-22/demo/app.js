const express = require('express');
const app = express()
app.get('/',function(req,res){
    res.send('Node服务启动成功') // 返回数据到前端
})
app.listen(3001)