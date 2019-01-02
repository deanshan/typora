const express=require('express');
const expressStatic=require('express-static');
const expressRoute=require('express-route');

const bodyParser=require('body-parser');
const multer=require('multer');
const multerObj=multer({dest: './static/upload'});

const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');

const consolidate=require('consolidate');

const mysql=require('mysql');

const server = express();

server.listen(8080);

// 1、获取请求数据
server.use(bodyParser.urlencoded({extended: false}))
server.use(multerObj.any());

// 2、解析cookie、处理session
server.use(cookieParser());

(function() {
  let keys = [];
  for(let i = 0; i < 100000; i++) {
    keys.push(`keys${Math.random()}`)
  }
  server.use(cookieSession({
    name: 'session_id',
    keys,
    maxAge: 20 * 3600 * 1000  // 20min
  }))
}());

// 3、模板引擎
server.engine('html', consolidate.ejs);
server.set('views', 'template');
server.set('view engine', 'html');

// 4、route：只能用server.use()
server.use('/', require('./route/route.js'))

// 5、static
server.use(expressStatic('./static/'))