{
    // let arr = [1, 2, 3, 4, 4, 5, 5];
    // let set = new Set(arr);
    // console.log([...set]);
    // console.log(set.size)

    // let s = new Set();
    // s.add(1).add(2).add(3);
    // console.log(s.has(1))
    // console.log(s.size);
    // s.delete(3);
    // console.log(s.has(3))
    // s.clear();
    // console.log(s)

    // function dedupe(array) {
    //     // return Array.from(new Set(array));
    //     return [...(new Set(array))]
    // }
    // console.log(dedupe([1, 1, 2, 3]))
    // dedupe([1, 1, 2, 3]) // [1, 2, 3]
    // let obj = {
    //     a: 2,
    //     b: 3,
    // }
    // let set = new Set([obj])
    // set.add({
    //     a: 1,
    //     b: 2
    // })
    // console.log(set)

    // let set = new Set([1, 2, 3])
    // for (let s of set.keys()) {
    //     console.log(s)
    // }
    // for (let s of set.values()) {
    //     console.log(s)
    // }
    // for (let s of set.entries()) {
    //     console.log(s)
    // }
    // for (let s of set) {
    //     console.log(s)
    // }
}
// WeakSet
{
    // const ws = new WeakSet()
    // // ws.add(1).add('1231')
    // // let obj1 = new Number(1)
    // let obj1 = 1;
    // let obj2 = Symbol();
    // // let obj2 = new String('1231')
    // ws.add(obj1).add(obj2)
    // // obj1 = null
    // console.log(ws.has(obj1), ws.has(obj2));
}
// Map
{
    // let s = new Set([
    //     [1, 2],
    //     [3, 4]
    // ])
    // let m = new Map(s);
    // console.log(m)
    // let m1 = new Map(m);
    // console.log(m1);

    // let m = new Map();
    // m.set('a', 123).set('a', 234).set([1], 111);
    // console.log(m.get([1]))
    // console.log(m.get('a'))
    // console.log(m)
    // console.log(Map.prototype.constructor)
    // console.log(m.size)
    // let s = new Set();
    // console.log(Set.prototype.constructor);
    // console.log(s.size)

    // let map = new Map();
    // map.set('abc', 6).set(111, 'sss').set(undefined, 'nah')

    // console.log(map.size) //3
    // console.log(map.get('abc')) //6
    // console.log(map.has(111)) //true
    // map.delete(undefined);
    // console.log(map.has(undefined)) //false

    // const map = new Map([
    //     ['F', 'no'],
    //     ['T', 'yes'],
    // ]);

    // for (let key of map.keys()) {
    //     console.log(key); //F T
    // }

    // for (let value of map.values()) {
    //     console.log(value); //"no" "yes"
    // }
    // for (let [key, value] of map.entries()) {
    //     console.log(key, value); //"F" "no","T" "yes"
    // }
    // // 等同于使用map.entries()
    // for (let [key, value] of map) {
    //     console.log(key, value); //"F" "no","T" "yes"
    // }
    // map.forEach(function (value, key, map) {
    //     console.log("Key: %s, Value: %s", key, value);
    // });

    // const myMap = new Map()
    //     .set(true, 7)
    //     .set({
    //         foo: 3
    //     }, ['abc']);
    // console.log([...myMap])

    // const myMap = new Map().set('yes', true).set('no', false).set(10, 100);

    // function fn(mapObj) {
    //     let obj = Object.create(null);
    //     for (let [key, value] of mapObj) {
    //         obj[key] = value;
    //     }
    //     return obj;
    // }
    // console.log(fn(myMap)) //{ '10': 100, yes: true, no: false }

    function fn(obj) {
        let map = new Map();
        for (let key of Object.keys(obj)) {
            map.set(key, obj[key])
        }
        return map;
    }
    let obj = {
        yes: true,
        no: false,
        10: 100
    }
    console.log([...fn(obj)]) //Map { '10' => 100, 'yes' => true, 'no' => false }
}