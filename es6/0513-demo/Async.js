let st = (time,val) =>{
  return new Promise(function (resolve, reject){
    setTimeout(() => {
      console.log('执行：'+val);
      resolve(val+" 完成")
    }, time);
  });
}
var gen = async function(){
  let st1 = await st(500,'吃饭')// promise - > resolve
  console.log(st1);
  let st2 = await st(1000,'睡觉')// promise - > resolve
  console.log(st2);
  let st3 = await st(300,'打豆豆')// promise - > resolve
}
gen()

/* 
async function fn(){
  // return await 123
  // return await Promise.resolve(123)
  try {
    await Promise.reject('出错了')
  } catch (error) {
    return await Promise.resolve('请重新填写')
  }
}
fn().then((val) => {
  console.log(val);
}).catch((err) => {
  console.log(err,1111);
}) 
async function fn() {
  // let f1 = await getA()
  // let f2 = await getB()
  let [f1,f2] = await Promise.all([getA(),getB()])
}
fn()
function getA() {
  setTimeout(() => {
    console.log(111);
  }, 500);
}
function getB() {
  setTimeout(() => {
    console.log(222);
  }, 100);
}*/