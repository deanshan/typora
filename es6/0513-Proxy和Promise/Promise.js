//es5 1 -> 2 -> 3
//Callback hell(回调地狱)
/* () => {
  () => {
    () => {
      () => {
        () => {
          
        }
      } 
    }  
  } 
} */
// 吃饭 -> 睡觉 -> 打豆豆
function step() {
  return new Promise((re,rj) => {
    setTimeout(() => {
      // console.log('吃饭----');
      re('吃饭')//成功
    }, 500);
  })
 
}
function step2(val) {
  return new Promise((re,rj) => {
    setTimeout(() => {
      // re(val+' 睡觉')
      rj('没有睡觉')//失败
    }, 500);
  })
}
function step3(val) {
  return new Promise((re,rj) => {
    setTimeout(() => {
      console.log(' 打豆豆----');
      re(val+' 打豆豆----')
    }, 500);
  })
}


step().then((val) => {
  return new Promise((re,rj) => {
    re('tom '+val)
  })
}).then(step2).then(step3).then((val) => {
  console.log(val);
}).catch((err) => {
  if(Object.is(err,'没有睡觉')){
    step3()
  }
})


/* new Promise(step).then((val) => {
  console.log(val);
  return new Promise(step2)
}).then((val) => {
  console.log(val);
  step3()
}) */
