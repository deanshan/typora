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
  return new Promise((re, rj) => {
    setTimeout(() => {
      // console.log('吃饭----');
      re('吃饭') //成功
    }, 500);
  })

}

function step2(val) {
  return new Promise((re, rj) => {
    setTimeout(() => {
      re(val + ' 睡觉')
      // rj('没有睡觉')//失败
    }, 500);
  })
}

function step3(val) {
  return new Promise((re, rj) => {
    setTimeout(() => {
      console.log(' 打豆豆----');
      re(val + ' 打豆豆----')
    }, 500);
  })
}


step()
  .then((val) => {
    return new Promise((re, rj) => {
      re('tom ' + val)
    })
  })
  .then(step2())
  .then(step3())
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    if (Object.is(err, '没有睡觉')) {
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


// 用户 -》 用户id  获取对应模块 -》 模块ID  数据
// getUsers getAdminMsg  getModule  getData
/* getUsers().then((res)=>{
  if(res.id == 管理员){
    getAdminMsg.then((res)=>{
      getModule(res.id).then((res)=>{
        getData(res.id) -----
      })
    })
  }else{
  }
}) */
//用户登录
/* getUsers().then((res) => {
  if(res == '管理员'){
    return getAdminMsg
  }else{
    return getUserMsg
  }
}).then((res) => {
  return getModule()
}).then((res) => {
  getData
})
// 封装
getUsers()
.then(getProjects)//判断管理员或普通用户
.then(getModule)
.then(getData)
.then(proResult) */