// 引入 http 模块
const http = require('http')
// 引入 url 模块
const url = require('url')

http.createServer((req, res) => {

    // 获取get请求参数
    // http://127.0.0.1:3000/article.html?id=1

    // 请求的URL
    let urlString = req.url
    // 将URL字符串转成URL对象
    let myUrl = url.parse(urlString)

    /**
     * 方式二
     */
    console.log(myUrl.query)
    let param = new URLSearchParams(myUrl.query)
    console.log(param.get('id'))

    /**
     * 方式一
     */
    /*

    // 将URL字符串转成URL对象
    let myUrl = url.parse(urlString,true)
    // 获取查询字符串
    console.log(myUrl.query.id)
    */


    res.end()
}).listen(3000, '127.0.0.1', () => {
    console.log('请访问：http://127.0.0.1:3000')
})