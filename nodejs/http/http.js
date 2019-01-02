const http = require('http')

// http.createServer(callback(request,response))  创建服务器
// callback(req,res)  回调函数(请求，响应)
const server = http.createServer((req, res) => {
  // console.log(req.url)
  switch(req.url) {
    case '/1.html':
      res.write('1111')
      break
    case '/2.html':
      res.write('2222')
      break
    default:
      res.write('404')
      break
  }
  // res.write('abc') //向前台返回数据
  res.end() // 返回数据结束
})

//监听  端口  80-->web  110-->email 3306-->database
server.listen(5168)