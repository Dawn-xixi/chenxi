/**
 * express接收html传递的参数
 */

var express=require('express');
var app=express();
var mysql=require('mysql');

/**
 * 配置MySql
 */
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'ok',
    database : 'login',
    port:'3306'
});
connection.connect();
app.get('/',function (req,res) {
    res.sendfile(__dirname + "/" + "index.html" );
})

/**
 * 实现登录验证功能
 */
app.get('/login',function (req,res) {
    var  name=req.query.name;
    var pwd=req.query.pwd;

    var selectSQL = "select * from user where uname = '"+name+"' and pwd = '"+pwd+"'";
    connection.query(selectSQL,function (err,rs) {
        if (err) throw  err;
        console.log(rs);
        console.log('ok');
        res.sendfile(__dirname + "/" + "ok.html" );
    })
})

app.get('/register.html',function (req,res) {
    res.sendfile(__dirname+"/"+"reg.html");
})

/**
 * 实现注册功能
 */
app.get('/reg',function (req,res) {
    var  name=req.query.name;
    var  pwd=req.query.pwd;
    var  user={uname:name,pwd:pwd};
    connection.query('insert into user set ?',user,function (err,rs) {
        if (err) throw  err;
        console.log('ok');
        res.sendfile(__dirname + "/" + "index.html" );
    })
})

var  server=app.listen(7744,function () {
    console.log("start");
})