

let wm = new WeakMap()
let key = {a:1}
wm.set(key,2)
console.log(wm.has(key));
console.log(wm.get(key));



// let obj = () => 12
// let obj1 = {name:'tom'}
// let map = new Map([['name','tom'],['age','19']])
// map.set(obj,'Map').set(obj,'aaaaa').set(obj1,'bbbb')
/* console.log(map.get(obj));
map.delete(obj1)
console.log(map.has(obj1));
map.clear()
console.log(map); */

// for (const val of map.entries()) {
//   console.log(val);
// }

/* let map = new Map()
map.set(Symbol.for('foo'),'123')
console.log(map.get(Symbol.for('foo'))); */

//obj -> 数据库的配置 账号  密码  静态
//map -> 变化  动态

//map 转数组
const map = new Map([[1,'a'],[()=>11,'b'],[3,'c']]);//数组转Map
/* console.log([...map]);
console.log([...map.keys()]);
console.log([...map.values()]); */

//map -> obj 键值对
function mapToObj(map) {
  /* let obj = {};
  for(let [k,v] of map){
    obj[k] = v;
  } */
  // return obj;
  return JSON.stringify([...map])
}
console.log(mapToObj(map));

//obj -> map
/* function objToMap(obj) {
  let map = new Map();
  for(let [k,v] of Object.entries(obj)){//let k of Object.keys(obj)
    map.set(k,v)
  }
  return map;
}
console.log(objToMap({name: "tom", age: 19})) */

