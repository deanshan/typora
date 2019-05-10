const ws = new WeakSet()
// ws.add(1).add('1231')
let obj1 = new Number(1)
let obj2 = new String('1231')
ws.add(obj1).add(obj2)
obj1 = null
console.log(ws.has(obj1),ws.has(obj2));