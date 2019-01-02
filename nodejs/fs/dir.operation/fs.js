const fs = require('fs');

const dir_name = 'upload';

//  判断是否有upload目录
fs.stat(dir_name, (error, stats) => {
  if(error) { //  没有该目录
    // 创建该目录
    fs.mkdir(dir_name, (err, data) => {
      if(err) throw err
      console.log('create success!')
    })
  } else {
    console.log('directory already exists');
    console.log(stats.isDirectory()); //  true
  }
})

//  获取指定目录下的所有目录和文件并区分开
let dir = []
let file = []
fs.readdir('./html', async (error, files) => {
  if(error) {
    console.error(error);
    throw error
  } else {
    for(let i = 0; i < files.length; i++) {
      await new Promise(resolve => {
        fs.stat(`./html/${files[i]}`, (err, stats) => {
          if(err) {
            console.error(err);
            throw err
          } else {
            if(stats.isDirectory()) dir.push(files[i])

            if(stats.isFile()) file.push(files[i])
          }
          resolve()
        })
      })
    }
    console.log(dir,file)
  }
})
