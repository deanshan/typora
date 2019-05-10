const o = Object.create({ x: 1, y: 2 });
o.z = 3;
console.log({...o})
console.log(o.__proto__)
let { x, ...newObj } = o;
console.log(x)
console.log(newObj)
let { y, z } = newObj;
