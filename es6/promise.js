// function f1() {
//     console.log('第一个')
//     f2()
// }

// function f2() {
//     console.log('第二个')
//     f3()
// }

// function f3() {
//     console.log('第三个')
// }
// f1()
// 如果想要按指定方式执行函数，通常是函数嵌套实现
// 下面通过promise实现
// function f1() {
//     return new Promise((resolve, reject) => {
//         console.log('第一个');
//         resolve('我是f1的resolve的参数');
//     })
// }
// function f2(value) {
//     return new Promise((resolve, reject) => {
//         console.log('第二个' + value)
//         // resolve('我是f2的resolve的参数')
//         return f2('我是f2的参数')
//         throw new Error('我是f2抛出的错误')
//     })
// }
// function f3() {
//     return new Promise((resolve, reject) => {
//         console.log('第三个');
//         reject('我是f3抛出的错误')
//         // throw new Error('我是f3抛出的错误')
//         resolve('我是f3的resolve的参数')
//     })
// }
// f1().then(
//         value => console.log(value), //我是f1的resolve的参数
//         error => console.log(error)
//     )
//     .then(
//         f2().then(value => console.log(value)) //我是f2的resolve的参数
//     )
//     .then(f3())
//     .catch(error => console.log(error)) // 我是f3抛出的错误

// new Promise((resolve, reject) => resolve('我是resolve的参数'))
//     .then(value => console.log(value))

// new Promise((resolve, reject) => reject('我是reject抛出的错误'))
//     .then(
//         value => console.log('resolve:' + value),
//         error => console.log('reject:' + error)
//     )

// new Promise((resolve, reject) => {
//     resolve('我是resolve的参数'),
//         reject('我是reject抛出的错误')
// }).then(
//     value => console.log('resolve:' + value),
//     error => console.log('reject:' + error)
// )
// new Promise((resolve, reject) => {
//     // reject('我是reject抛出的错误'),
//     throw new Error('错误')
//     resolve('我是resolve的参数')

// }).then(
//     value => console.log('resolve:' + value),
//     error => console.log('reject:' + error)
// )

// new Promise((resolve, reject) => reject('我是reject抛出的错误'))
//     .catch(error => console.log('catch:' + error))

// function fn(value) {
//     return new Promise((rs, rj) => rs(value))
// }
// fn('111').then(rs => {
//         console.log(rs)
//         return fn('222')
//     })
//     .then((rs, rj) => {
//         if (Object.is(rs, '222')) {
//             throw new Error('错误')
//         }
//     })
//     .catch(error => console.log('catch:' + error))

// Promise.resolve(2).then(value => console.log(value));