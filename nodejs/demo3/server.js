const express = require('express')  //  创建服务器
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

const mysql = require('mysql')  //  数据库

// 创建连接池
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'blog'
})
//  创建服务器
let server = express();

// 1、解析cookie(密钥)
server.use(cookieParser('adskfjkasdjfkajdfds'));

// 2、使用session（必须要解析cookie才能使用）
let keys = [];
for(let i = 0; i < 100000; i++) {
  keys.push(`keys${Math.random()}`)
}
server.use(cookieSession({
  name: 'blog',  //  自定义名字
  keys, // 越多越好
  maxAge: 20 * 3600 * 1000  // 20分钟
}))

// 3、解析post
// 解析post数据
server.use(bodyParser.urlencoded({ extended: false }))
// 解析post文件
server.use(multer({dest: './www/upload'}).any())

// 4、配置模板引擎
server.set('view engine', 'html') // 输出的文件类型

server.set('views', './ejs')  // 模板文件的路径

server.engine('html', consolidate.ejs)  // 适配模板引擎类型

//  用户请求操作

server.get('/', (req, res, next) => {
  // 查询 banner表里的内容
  db.query("SELECT * FROM banner", (err, data) => {
    if (err) {
      res.status(500).send('database error').end();
    } else {
      res.banners = data;
      next();
    }
  })
})
server.get('/', (req, res, next) => {
  //  查询 article表里的内容
  db.query("SELECT ID, title, summery FROM article", (err, data) => {
    if (err) {
      res.status(500).send('database error').end();
    } else {
      res.articles = data;
      next();
    }
  })
})
server.get('/', (req, res) => {
  res.render('index.ejs', { banners: res.banners, articles: res.articles });
})
server.get('/article', (req, res) => {
  // 判断id是否存在
  if(req.query.id) {
    // 判断id是否符合
    db.query(`SELECT * FROM article WHERE ID=${req.query.id}`, (err, data) => {
      if(err) {
        res.status(500).send('数据有问题').end();
      } else {
        // 判断查找到的id是否有数据
        if(data.length === 0) {
          res.status(404).send('您请求的文章找不到').end();
        } else {
          res.render('conText.ejs', {
            article: data[0]
          });
        }
      }
    })
  } else {
    res.status(404).send('您请求的文章找不到').end();
  }
})

// 4、static数据
server.use(expressStatic('./www'))

server.listen(8080);
console.log(new Date().getTime())