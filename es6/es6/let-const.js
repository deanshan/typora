// let和const共同点
// 1、不存在变量提升
{
    // {
    //     var a = 1;
    //     let b = 11;
    // }
    // console.log(a); //1
    // console.log(b); //ReferenceError:b is not defined

    // for (let i = 0; i < 3; i++) {}
    // console.log(i); //ReferenceError:i is not defined

    // for循环特别之处， 就是设置循环变量的那部分是一个父作用域， 而循环体内部是一个单独的子作用域。
    // for (let i = 0; i < 2; i++) {
    //     let i = 'abc';
    //     console.log(i); //abc abc
    // }

    // console.log(a); //undefined
    // var a = 11;
    // console.log(b); //ReferenceError：b is not defined
    // let b = 111;

    // let fn = function (i) {
    //     let i = 1;
    //     console.log(i)
    // }
    // fn(2)
}
// 2、暂时性死区(TDZ)
{
    // console.log(typeof xx); //undefined
    // console.log(typeof x); //ReferenceError
    // let x;
    // var y = y;
    // 声明未完成前不能使用此变量
    // let z = z; //ReferenceError

    // if (true) {
    //     tmp = 'abc';
    //     console.log(tmp); //abc
    // }
    // if (true) {
    //     // TDZ开始
    //     // tmp = 'abc';
    //     // console.log(tmp); //ReferenceError
    //     let tmp; // TDZ结束
    //     tmp = 100;
    //     console.log(tmp); //100
    // }

    // 隐蔽性的死区： 在y未声明前就使用

    // function foo(x = y, y = 2) {
    //     return {
    //         x,
    //         y
    //     };
    // }
    // console.log(foo());
}
// 3、不允许重复声明
{
    // let不允许在相同作用域内，重复声明同一个变量。
    // function foo() {
    //     let aa = 1;
    //     let aa = 22;
    // }
    // foo();
    // 不能在函数内部重新声明参数
    // function f(x) {
    //     let x;
    // }
    // f();
}
//区别
{
    // const一旦声明变量，就必须立即初始化，不能留到以后赋值
    // const PI = 3.14;
    // console.log(PI); //3.14
    // PI = 5;
    // console.log(PI); //Assignment to constant variable
    // 由于const声明的变量是指向此变量所在的内存地址
    // 当变量是复合类型时
    // const foo = {};
    // //可以为foo添加属性或方法
    // foo.prop = 123;
    // const foo = {}; //error
}