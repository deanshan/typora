// let arr = [9.5,2.6,4.9,3.3]
// let arr =["1", "2", "3", "4","5",6,7,8,9,10,11,12,13,14,15];
// let a = arr.map(parseInt)
// console.log(parseInt('12', 11))
// console.log(a)  //[ 1, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 9, 11, 13, 15, 17, 19 ]

// console.log(new Date())  //2018-07-11T11:07:20.269Z
// console.log(+new Date()) //1531307240275

// function t() {
//   var a = 1
//   return (
//     a++,
//     a
//   )
// }
// console.log(t())

// let x,{x:y=1} = {x}
// let {x: y = 3} = {x: 5};
// console.log(x,y)

// console.log(typeof (new (class {class(){}})))

// console.log([...[...'123']].length)

// console.log(('B'+('a'.repeat(1)).repeat(2)).repeat(3))
// 2,8,22,24,28,32

//
// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i)
//   },1000)
//   console.log(i)
// }
// 结果：0 1 2 3 3 3
// 等同于 代码如下：
// var i = 0;
// setTimeout(function() {
//     console.log(i);
// }, 0);
// console.log(i);
// i++;
// setTimeout(function() {
//     console.log(i);
// }, 0);
// console.log(i);
// i++;
// setTimeout(function() {
//     console.log(i);
// }, 0);
// console.log(i);
// i++;



// 字符串倒置：先转数组，倒序后，再转字符串
// String.prototype.myReset = function () {
//   return this.split('').reverse().join('')
// }
// var str = 'abc'
// console.log(str.myReset())

// 数组去重后排序
// var arr = [1,3,2,4,2,22,1]
// let result = Array.from(new Set(arr)).sort((a,b) => {return a - b})
// console.log(result)

// function max(a, b, c) {
//   return Array.prototype.slice.call(arguments).sort((a, b) => {return a - b}).pop()
// }
// console.log(max(22,33,11))

// (function () {
//   console.log(1)
//   setTimeout(function(){console.log(2)},1000)
//   setTimeout(function(){console.log(3)},0)
//   console.log(4)
// })()
// 1 4 3 2

// console.log(ppx)//undefined
// var ppx = 'x'
// function f1() {
//   console.log(ppx)//function
//   var ppx = 'y'
//   function ppx () {
//     console.log(ppx)//error:ppx is not a function
//   }
//   console.log(ppx)//y
//   ppx()
// }
// f1()

// var ppx
// function f1 () {
//   function ppx () {
    // console.log(ppx)//function
//   }
//   ppx()
//   console.log(ppx)
//   ppx = 'y'
//   console.log(ppx)
//   ppx()
// }
// console.log(ppx)
// ppx = 'x'
// f1()

// var str = '111>222>3333>444'
// str.split('>')
// console.log(str.split('>'))

// var arr = [[1, 2],['a', 'b'],['A', 'B']]
// var test = arr.map(val => {
//   return val[1]
// })
// console.log(test)

// function add(n) {
//     if (arguments.length === 1) {
//         function fn(m) {
//             n += m
//             return fn
//             // return add(n+m);
//         }
//         fn.toString = fn.valueOf = function() {
//           return n
//         }
//         return fn
//     }
//     if (arguments.length > 1) {
//         var s = 0
//         Array.prototype.slice.call(arguments).forEach(value => {
//             s += value
//         })
//         return s
//     }
// }
// var sum = add(1)(2)(3)(4).valueOf()
// var sum = add(1,2,3)
// console.log(sum);//6

// var sum = (function() {
//   var list = [];

//   var add = function() {
//       // 拼接数组
//       var args = Array.prototype.slice.call(arguments);
//       list = list.concat(args);
//       return add;
//   }
//   // 覆盖 toString 方法
//   add.toString = function() {
//       // 计算总和
//       var sum = list.reduce(function(pre, next) {
//           return pre + next;
//       });
//       // 清除记录
//       list.length = 0;
//       return sum;
//   }

//   return add;
// })();

// console.log(sum(2, 3).toString())
// // 5
// console.log(sum(2)(3).toString())
// // 5

// 闭包中的变量变化
// function f () {
//     var count = 0
//     return function () {
//         count++
//         console.log(count)
//     }
// }
// f()()//1
// f()()//1
// var s = f()
// s()//1
// s()//2

// var str = 'asdssaaaddddddddddd'
// var obj = {}
// for (var i = 0; i <= str.length - 1; i++) {
//     if (!obj[str.charAt(i)]) {
//         obj[str.charAt(i)] = 1
//     } else {
//         obj[str.charAt(i)]++
//     }
// }
// console.log(obj)
// for (let i in obj) {
//     console.log(i)
// }

// var arr = [2,3,4,2,3,4]
// var obj = {}
// for (var i = 0; i <= arr.length - 1; i++) {
//     if (!obj[arr[i]]) {
//         obj[arr[i]] = 1
//     } else {
//         arr.splice(i,1)
//         i--
//     }
// }
// console.log(arr)

// function P (a,b) {
//     this.a = a || 0
//     this.b = b || 0
//     this.sum = function () {
//         return this.a + this.b
//     }
// }
// function M (a,b) {
//     P.call(this,a,b)
// }
// var m = new M(1,2)
// console.log(m.sum())

// 快速排序
// var arr = [12,1,23,412,22,13,43]
// function quickSort (arr) {
//     if (arr.length <= 1) return arr
//     // 中间值的索引值
//     var index = Math.floor(arr.length / 2)
//     var temp = arr.splice(index, 1)
//     var left = [], right = []
//     for (var i = 0; i <= arr.length - 1; i++) {
//         if (arr[i] < temp) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return quickSort(left).concat(temp,quickSort(right))
// }
// console.log(quickSort(arr))
