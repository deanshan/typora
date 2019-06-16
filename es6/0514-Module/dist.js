const DIST_DIR = './dist/'; // 编译后文件目录
const Config = {
  dist: DIST_DIR, 
  js: { 
    dir: DIST_DIR + 'js', 
    dist: DIST_DIR + 'js/**/*.js', 
  },
}
export{
  Config
}