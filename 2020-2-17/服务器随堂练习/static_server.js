// 引入 http 模块
const http = require('http')
// 引入 url 模块
const url = require('url')
// 引入 fs 模块
const fs = require('fs')

const server = http.createServer((req, res) => {
    
    // 对 /favicon.ico 不进行任何处理
    if (req.url == '/favicon.ico') {
        return
    }

    // 将 url 字符串 转换成 url 对象
    let myUrl = url.parse(req.url)

    // 获取用户请求的 URL 地址
    console.log(myUrl.pathname)

    // 静态路由
    if (myUrl.pathname == '/' || myUrl.pathname == '/index.html') {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
        // 读取文件
        // err => 如果读取文件失败，失败的消息封装到 err 对象中
        // data => 读取文件的内容
        fs.readFile('./html/index.html', (err, data) => {
            // 读取文件失败操作
            if (err) {
                console.log(`读取页面失败：${err.message}`)
                return
            }

            res.end(data)
        })


    } else if (myUrl.pathname == '/login.html') {
        if (req.method.toLocaleLowerCase() == 'get') {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
            fs.readFile('./html/login.html', (err, data) => {
                if (err) {
                    console.log(`读取页面失败：${err.message}`)
                    return
                }

                res.end(data)
            })

        } else if (req.method.toLocaleLowerCase() == 'post') {
            res.end('正在进行登录...(登录处理)')
        }
    } else if (myUrl.pathname == '/regist.html') {
        res.end('<h1>注册页</h1>')
    } else if (myUrl.pathname == '/css/style.css') {
       
        res.writeHead(200, { 'Content-Type': 'text/css;charset=utf-8' })
        fs.readFile('./html/css/style.css', (err, data) => {
            if (err) {
                console.log(`读取CSS失败：${err.message}`)
                return
            }
            res.end(data)
        })


    } else if(myUrl.pathname == '/js/public.js'){

        res.writeHead(200, { 'Content-Type': 'text/javascript;charset=utf-8' })
        fs.readFile('./html/js/public.js', (err, data) => {
            if (err) {
                console.log(`读取JS失败：${err.message}`)
                return
            }
            res.end(data)
        })

    } else if(myUrl.pathname == '/img/logo.png'){

        res.writeHead(200, { 'Content-Type': 'image/png' })
        fs.readFile('./html/img/logo.png', (err, data) => {
            if (err) {
                console.log(`读取图片失败：${err.message}`)
                return
            }
            res.end(data)
        })

    } else {
        res.end('404')
    }
})

// 服务监听
server.listen(3000, '127.0.0.1', () => {
    console.log('请访问：http://127.0.0.1:3000')
})