# 功能
  ### 解析上传的文件并保存到本地,如果有扩展名的文件，如：图片，需要对此文件进行重命名
#技术栈

1. 模块
  + express
  + express-static
  + body-parser(只能解析post数据) application/x-www-form-urlencoded
    使用：server.use(bodyParse.urlencode())
  + multer(用来处理post文件数据)  multipart/form-data
    使用:
      <!-- 实例化multer对象 -->
      <!-- 指定上传路径，文件大小... -->
      let multerObj = multer({dest:'upload/'})
      <!-- 接收文件 -->
      server.use(multerObj.single())  // 接收某个文件
      server.use(multerObj.any()) //  接收任何文件
      <!-- 获取文件信息 -->
      server.use((req, res) => {
        console.log(req.files)
        <!-- req.files: 多个属性 -->
      })
  + cookie-parser
  + cookie-session
  + jade
  + ejs
  + consolidate 适配