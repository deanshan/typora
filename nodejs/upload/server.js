const express = require('express')
const expressStatic = require('express-static') //  处理静态文件

// 解析post
const bodyParser = require('body-parser') //  解析post数据
const multer = require('multer')  //  解析post文件
const fs = require('fs')
const path = require('path')

let server = express();

server.listen(8080);

// 解析post数据
server.use(bodyParser.urlencoded({ extended: false }))
//  指定上传路径，文件大小...
server.use(multer({dest: './www/upload/'}).any())
// 解析post文件并重命名上传的文件
server.post('/', (req, res, next) => {
  console.log(req.files)  //  数组：多个对象
  // 上传后解析的文件名(没有扩展名）（旧名）
  let oldFileName = req.files[0].path
  // 解析上传前的原本文件名（包含扩展名）并获取扩展名
  let extension = path.parse(req.files[0].originalname).ext
  // 新名
  let newFileName = oldFileName + extension
  // 重命名
  fs.rename(oldFileName, newFileName, (error, data) => {
    error ? res.send('上传失败') : res.send('上传成功')
  })
})

// static数据
server.use(expressStatic('./static'))
