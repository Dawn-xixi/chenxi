// 引入 http 模块
const http = require('http')
// 引入 url 模块
const url = require('url')

http.createServer((req, res) => {

    // 获取POST请求参数
    // http://127.0.0.1:3000/article.html

    let params = ''

    // POST请求数据的获取
    req.on('data',(chunk)=>{
        params += chunk
    })

    // POST请求结束
    req.on('end',()=>{
        let param = new URLSearchParams(params.toString())
        if(param.has('username')){
            console.log(param.get('username'))
        }else{
            console.log('请输入用户名')
        }
        console.log(param.get('password'))
    })

    res.end()
}).listen(3000, '127.0.0.1', () => {
    console.log('请访问：http://127.0.0.1:3000')
})