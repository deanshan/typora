// es5 -> new Array  []   {}
//es6 -> set ,map

let set = new Set([2,3,6,9,10])
let set1 = new Set([3,9,2,4,8,1])
//  求 并集
let union = new Set([...set,...set1])
//交集 
const intersect = new Set([...set].filter(val => set1.has(val)))
//差集
const difA = new Set([...set].filter(val => !set1.has(val)))
const difB = new Set([...set1].filter(val => !set.has(val)))

console.log(difB);

/* set = new Set([...set].filter(val => val%2 == 0 ))
console.log(set); */


/* const set = new Set()
set.add(1).add(2).add(3).add(4)
// const arr = Array.from(set)
const [...arr] = set
console.log(arr);

set.delete(3)//输出元素
console.log(set.has(3));//查找元素是否存在
set.clear()//清空所有元素
console.log(set); */


/* for (let [key,val] of set.entries()) {
  console.log(key,val);
}
set.forEach((val,key) => {
  console.log(key,val);
}); */

/*var arr = [1,'1',-0,+0,undefined,undefined,null,null,NaN,NaN,true,'true']// ==
// let arr = [1,[],3,[4],[2],[]]
// let set = new Set([[],{},1,'str',y=>y*2,undefined,null])
arr = [...new Set(arr)]

let arr1 = arr.filter(function(val,index,arr){
  return arr.indexOf(val) === index
})

console.log(arr1);
arr.map(function (val,index,arr) {
  // console.log(val,index,arr.indexOf(val));
  if(arr.indexOf(val) === index){
    console.log(val,index);
  }
}) */