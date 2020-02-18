// 引入 http 模块
const http = require('http')
// 引入 url 模块
const url = require('url')
// 引入 fs 模块
const fs = require('fs')
// 引入path模块
const path=require('path')

http.createServer((req, res) => {

    let _url = url.parse(req.url)

    let pathname = _url.pathname

    let extname=path.extname(pathname)

    let mime='text/html;charset=utf-8'

    let base = './html'
    if (extname == '.jpg') {
        mime= 'image/jpg'
        base += '/img' 
    }else if (extname == '.css') {
        mime= 'text/css'
        base += '/css' 
    }else if (extname == '.js') {
        mime= 'text/javascript'
        base += '/js'    
    }

    // 动态路由
    res.writeHead(200, { 'Content-Type': mime})
    fs.readFile(base+pathname, (err, data) => {
        // 读取文件失败操作
        if (err) {
            console.log(`读取页面失败：${err.message}`)
            console.log(base)
            console.log(pathname)
            return
        }
        res.end(data)
    })

    
}).listen(3333, '127.0.0.1', () => {
    console.log('请访问：http://127.0.0.1:3333')
})