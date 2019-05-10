

/* let target = {name:'tom'}
let proxy = new Proxy(target,function () {
  
})
proxy.name = '王五'
target.age = 60
console.log(target.name);//
console.log(proxy.age);// */

/* let pro = new Proxy({
  name:'tome',
  add(val){
    return val
  }
},{
  get:function(target,key) {
    // console.log('拦截对象属性的读取');
    if(target[key] == undefined){
      return '没有该属性'
    }
    return target[key]
  },
  set: function(target,key,value){
    console.log('进行预处理');
    if(Object.is(key,'age')){
      value = value>0 && value<150 ? value : 0
    }
    return target[key] = value
  },
  apply: function(target, ctx, args){
    console.log('拦截函数的调用call  apply');
  }
})
pro.age = 190
console.log(pro.apply(null,1,2)); */


/* let pro = new Proxy((x,y) => {
  return x*y
},{
  apply(target, ctx, args) {
    console.log('拦截函数的调用、call和apply操作',args,arguments);
    return Reflect.apply(...arguments);
  }
})
console.log(pro.apply(null,[1,2])); */

let obj = {
  noDel : '12345',
  oldMethod : function(){
    return this.noDel
  },
  deNotChange: '111111'
}
const NODEL = ['noDel','','','']//不能删除的属性
const NoChange = ['deNotChange','noDel','','']//不能修改的属性
const DEPRECATED = ['oldMethod','']//不推荐使用的方法

obj = new Proxy(obj,{
  set(target,key,value,proxy){
    if(NoChange.includes(key)){
      throw Error(`错误！${key} 属性不能修改`)
    }
    return Reflect.set(target,key,value,proxy)
  },
  get(target,key,proxy){
    if(DEPRECATED.includes(key)){
      console.log(`警告！${key} 不推荐使用`);
    }
    let val = target[key]
    return Object.is(val,undefined) ? (...args) => {
      Reflect.apply(target[key],target,args)
    } : val
  },
  deleteProperty(target, key){
    if(NODEL.includes(key)){
      throw Error(`错误！${key} 不能删除`)
    }
    return Reflect.deleteProperty(target,key)
  }
})
console.log(obj.noDel)
// delete obj.noDel//删除对象属性
console.log(obj.noDel)