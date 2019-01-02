const http = require('http')
const url = require('url')

http.createServer((req, res) => {
  // req.url  /aaa?user=..&password=..
  let urlObj = url.parse(req.url, true) //第二参数设为true,会解析query参数

  let pathname = urlObj.pathname
  let query = urlObj.query
  console.log(urlObj, pathname, query)

  res.write('404')
  res.end()
}).listen(8080)