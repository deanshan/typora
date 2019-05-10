/* function *fn(){
  yield 'hello'
  console.log('你好');
  yield 'ES6'
  console.log('JS');
  // return '结束'
}
let f = fn()//必须使用变量接收
console.log(f.next()) // 第一个yield  done -> 是否最后一个 
console.log(f.next())
console.log(f.next()) 

function * demo() {
  let val = yield 'aaa'// 变量接收的是下一步.next()传递的参数
  console.log(val);
}
let fn = demo()
console.log(fn.next());//aaa { value: 'aaa', done: false }
fn.next(1111111)//undefined*/


/* function *demo() {
  console.log(fn(yield 'a'));
  let val = yield
  console.log(val);
  console.log("x = "+ (yield));
}
function fn(val){
  return val * 10
}
let f = demo()
console.log(f.next());//{ value: 'a', done: false }
console.log(f.next(10))
console.log(f.next('ES6'));
console.log(f.next()); 

function * demo(num){
  let x = 2* (yield num)
  console.log("x = "+x);
  let y = yield x*3
  console.log("y = "+y);
  console.log(x,y);
  yield *d2()
}
function * d2(){
  yield 3
}
let fn = demo(2)
fn.next()
fn.next(5)//10
console.log(fn.next(6));*/

let st = (time,val) =>{
  return new Promise(function (resolve, reject){
    setTimeout(() => {
      console.log('执行：'+val);
      resolve(val+" 完成")
    }, time);
  });
}
var gen = function *(){
  let st1 = yield st(500,'吃饭')
  console.log(st1);
  let st2 = yield st(1000,'睡觉')
  console.log(st2);
  let st3 = yield st(300,'打豆豆')
}
function run(fn){
  let it = fn()
  go(it.next())
  function go(result){
    if(result.done) return result.value
    return result.value.then((val) => {
      return go(it.next(val))
    })
  }

}
run(gen)



