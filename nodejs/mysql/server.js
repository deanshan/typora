const express = require('express')
const expressStatic = require('express-static') //  处理静态文件

// 解析post
const bodyParser = require('body-parser') //  解析post数据
const multer = require('multer')  //  解析post文件
const fs = require('fs')
const path = require('path')

// 处理cookie&session
const cookieParser = require('cookie-parser') //  解析cookie（签名：简单密钥）
const cookieSession = require('cookie-session') //  处理session

const consolidate = require('consolidate')  // 适配模板引擎

const mysql = require('mysql')

// 连接池
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'blog'
})

let server = express();

// 1、解析cookie(密钥)
server.use(cookieParser('adskfjkasdjfkajdfds'));

let keys = [];
for(let i = 0; i < 100000; i++) {
  keys.push(`keys${Math.random()}`)
}
// 2、使用session
server.use(cookieSession({
  name: 'castiel',  //  自定义名字
  keys, // 越多越好
  maxAge: 20 * 3600 * 1000  // 20分钟
}))

// 3、解析post
// 解析post数据
server.use(bodyParser.urlencoded({ extended: false }))
// 解析post文件
server.use(multer({dest: './www/upload'}).any())
// 重命名上传的文件
// server.use('/', (req, res, next) => {
//   console.log(req.files)  //  数组：多个对象
//   // 上传后解析的文件名(没有扩展名）（旧名）
//   let oldFileName = req.files[0].path
//   // 解析上传前的原本文件名（包含扩展名）并获取扩展名
//   let extension = path.parse(req.files[0].originalname).ext
//   // 新名
//   let newFileName = oldFileName + extension
//   // 重命名
//   fs.rename(oldFileName, newFileName, (error, data) => {
//     error ? res.send('上传失败') : res.send('上传成功')
//   })
// })

// 4、配置模板引擎
  // 输出什么样的文件
server.set('view engine', 'html');
  // server.set('view engine', 'excel')
  // 模板文件放在哪
server.set('views', './ejs')
  // 使用哪种模板引擎
server.engine('html', consolidate.ejs)

//  用户请求操作
server.get('/', (req, res, next) => {
  db.query("SELECT * FROM banner", (err, data) => {
    if (err) {
      res.status(500).send('error').end();
    } else {
      res.render('index.ejs', { banners: data });
    }
  })
})

// 4、static数据
server.use(expressStatic('./www'))

server.listen(8080);