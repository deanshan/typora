const http = require('http')
const querystring = require('querystring')

http.createServer((req, res) => {

  let db = '' //  用来存储数据

  // post 数据是分段发送的
  // 一段数据到达（很多次）
  let n = 0
  req.on('data', (data) => {
    console.log(`第${n++}次`)
    db += data

  })
  // end-->数据全部到达（一次）
  req.on('end', () => {
    let post_data = querystring.parse(db)
    console.log(post_data)
    res.end()
  })

}).listen(8080)