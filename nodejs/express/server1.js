//  引入express模块
const express = require('express')
const expressStatic = require('express-static')

let server = express()  //  创建服务

var users={
  'blue': '123456',
  'zhangsan': '654321',
  'lisi': '987987'
};
// 处理请求的三种方法

server.get('/login', (req, res) => { //  处理get请求
  var user=req.query['user'];
  var pass=req.query['pass'];

  if(users[user]==null){
    res.send({ok: false, msg: '此用户不存在'});
  }else{
    if(users[user]!=pass){
      res.send({ok: false, msg: '密码错了'});
    }else{
      res.send({ok: true, msg: '成功'});
    }
  }
})
server.post('/', (req, res) => { //  处理post请求
  console.log('post')
})
server.use(expressStatic('./www'), (req, res) => { //  可以处理get和post请求
  console.log('get&post')
})

server.listen(8080) //  监听