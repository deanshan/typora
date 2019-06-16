// let [a, [b], c, d, ...f] = [1, [22], 'str'];//a=1,b=22,c='str',d=undefined,f=[]
// console.log(a,b,c,d,f);
// let [a,b,...c] = {x:1,y:2,z:3}
// console.log(a,b,c);
// let [foo] = {}
// console.log(foo);
// let { log, sin, cos } = Math;
// console.log(sin(360));
// let { toString:s} = 123;
// console.log(s);
let o1 = {
    a: 1
};
let o2 = {
    b: 2
};
o2.__proto__ = o1;
let { ...o3
} = o2;
console.log({ ...o3
});