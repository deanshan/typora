const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const url = require('url')

let server = http.createServer((req, res) => {
  // get数据
  let obj = url.parse(req.url, true) //  解析url,返回的是一个对象
  let pathname = obj.pathname  // 获取绝对路径
  let query = obj.query  // 获取参数

  // post数据
  let db = '' //  存储post传送的数据
  req.on('data', data => {
    db += data
  })
  req.on('end', () => {
    let post_data = querystring.parse(db) //  解析 post 中的 url

    console.log(pathname, query, post_data)
    // 文件请求
    let filename = `./www${pathname}`
    fs.readFile(filename, (err, data) => {

      err ? res.write('404') : res.write(data)

      res.end()
    })
  })
})

server.listen(8080)