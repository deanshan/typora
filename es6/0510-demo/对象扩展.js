




const target = {a:1,b:2}
const sour1 = {b: 333,c:67}
const sour2 = {c:8989, d: 890}
Object.assign(target,sour2,sour1) //  {a:1, b:333, c:67,d:890}
const obj1 = Object.assign({},sour1)  //
let {...obj} = target
console.log(obj1, obj)
console.log(typeof Object.assign(NaN));


/* console.log( 1 == '1');// true
console.log( -0 == +0);// true
console.log( NaN == NaN);// false

console.log(Object.is(1, '1'));//false
console.log(Object.is(+0, -0));//false
console.log(Object.is(NaN, NaN));//true


let val = 'name'
let g = 'getName'
const obj = {
  age : 19,
  [val]:'tom',
  [g](){
    console.log(this[val]);
  }
}
console.log(obj);

for (const [key,val] of Object.entries(obj)) {
  console.log(key,val );
}


// for (const key in obj) {
//   console.log(obj[key]);
// }

let name = 'tom'
let skill = 'web'
var obj = {
  name,
  skill,
  print(){
    console.log(this.name);
  }
}
obj.print()

function fn(x,y){
  return {x,y}
}
console.log(fn(2,3)); */