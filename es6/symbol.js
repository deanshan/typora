{
    // let obj = {
    //     toString() {
    //         return '对象'
    //     }
    // }
    // const s = Symbol(obj);
    // console.log(s);
    // let s = Symbol();
    // console.log(Boolean(s))
    // let a = Symbol('a');
    // let b = Symbol('b');
    // let obj = {
    //     [a]: 1,
    //     d: 4,
    //     [b]: 2,
    //     c: 3
    // }
    // let os = Object.getOwnPropertySymbols(obj);
    // console.log(os)
    // console.log(Reflect.ownKeys(obj))
    // console.log(obj[a])
} {
    // let a = Symbol.for('abc');
    // let b = Symbol.for('abc');
    // console.log(a === b)

    let a = Symbol('abc');
    console.log(Symbol.keyFor(a));
    let b = Symbol.for('abc');
    console.log(Symbol.keyFor(b));
}