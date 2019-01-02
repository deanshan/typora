const http = require('http')
const url = require('url')
const fs = require('fs')
const querystring = require('querystring')

let users = {}  //  存储用户信息

let server = http.createServer((req, res) => {

  let db = '' //  存储数据，暂时用个变量来存储
  // 多次接收数据
  req.on('data', data => {
    db += data
  })
  // 数据全部接收到
  req.on('end', () => {
    // 对所有数据进行解析处理
    let url_obj = url.parse(req.url, true)  //  解析url
    const pathname = url_obj.pathname //  获取路径名
    const GET = url_obj.query //  获取get参数
    const POST = querystring.parse(db)  //  获取post参数

    // 访问的数据类型：接口/文件
    if (pathname === '/user') { //  此处暂时只判断路径名为user的接口
      if (GET.act === 'reg') {  //  注册
        // 判断用户是否已存在
        if (users[GET.user]) {
          res.write('{"ok": false, "msg": "此用户已存在"}')
        } else {
          users[GET.user] = GET.pass
          res.write('{"ok": true, "msg": "注册成功"}')
        }
      } else if (GET.act === 'login') {  //  登录
        // 判断用户名是否存在
        if (users[GET.user] === null) {
          res.write('{"ok": false, "msg": "此用户不存在"}')
        } else if (users[GET.user] !== GET.pass) {
          res.write('{"ok": false, "msg": "用户名或密码有误"}')
        } else {
          res.write('{"ok": true, "msg": "登录成功"}')
        }
      } else {
        res.write('{"ok": false, "msg": "未知的act"}')
      }
      res.end() //  结束
    } else {
      let filename = `./www${pathname}`

      fs.readFile(filename, (err, data) => {
        if (err) {
          res.write('404')
        }else{
          res.write(data)
        }
        res.end()
      })
    }
  })
})

server.listen(8080)