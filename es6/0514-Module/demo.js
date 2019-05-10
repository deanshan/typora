
//中转
export {pi as PI ,print as p,default as def} from './demo1.js' 

//es6
// let PI = 3.14
const SQRT = Math.sqrt
// console.log(pi)
export {
  SQRT as sqrt
}
/* let square = (val) => {
  return val*val
}
class Point{
  constructor(x,y){
    this.x = x
    this.y = y
  }
  print(){
    console.log('(' + this.x + ', ' + this.y + ')')
  }
} */
// export 1//err
// var m = 1
// export m// errr
/* let fn = () => {
  console.log(pi)
}
export {fn}

setTimeout(() => {
  print()
}, 2000); */
/* export {
  //添加别名
  pi,
  
  SQRT as sqrt,
  square as sq,
  Point as P
} */
/* export default () => {
  console.log('export default')
} */

export default class a{
  constructor(){
    
  }
}
/* 
var a = 1
export default a */










//es5
/* let fn1 = () => {
  console.log("保存成功！-----")
}
let fn2 = () => {
  console.log("加载成功！-----")
}
module.exports = {
  name:'modules',
  'save':fn1,
  'loading':fn2
}
 */

