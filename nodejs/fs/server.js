const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) => {

  let filename = `./www${req.url}`  //  访问www文件下的文件

  fs.readFile(filename, (err, data) => {
    if (err) {
      res.write('404')
    } else {
      res.write(data)
    }
    res.end() //  必须在文件读取完成后，才执行end方法
  })
})

server.listen(8080)