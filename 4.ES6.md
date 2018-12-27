![](E:\web\Typora\img\es6.png)

# [ES6 API](http://es6.ruanyifeng.com/)

# let和const

## 相同规则

### 不存在变量提升

```js
	{
        var a = 1;
        let b = 11;
    }
    console.log(a); //1
    console.log(b); //ReferenceError:b is not defined

    for (let i = 0; i < 3; i++) {}
    console.log(i);//ReferenceError:i is not defined

    console.log(a); //undefined,变量a提升了
    var a = 11;
    console.log(b); //ReferenceError：b is not defined
    let b = 111;
```

### 暂时性死区(TDZ)

在代码块内，如果使用某个变量后再去用let或const声明，就会形成TDZ，该变量都是不可用的

```js
    console.log(typeof xx);//undefined
    console.log(typeof x);//ReferenceError，在输出后用let声明了
    let x;

    var y = y;// 不报错
    let z = z;//ReferenceError  声明未完成前不能使用此变量

    if (true) {
        // TDZ开始
        // tmp = 'abc';
        // console.log(tmp); //ReferenceError
        let tmp; // TDZ结束,在此变量tmp声明之前使用，报错
        tmp = 100;
        console.log(tmp); //100
    }

    //隐蔽性的死区：在y未声明前就使用
    function foo(x = y, y = 2) {//正确写法 x = 2, y = x
        return {x, y};
    }
    console.log(foo());// 报错
```

### 不允许重复声明

```JS
	//let不允许在相同作用域内，重复声明同一个变量。
    function foo() {
        let aa = 1;
        let aa = 22;// 报错
    }
    foo();

    //不能在函数内部重新声明参数
    function f(x) {
        let x;// 报错
    }
```

### 块级作用域

ES5 只有全局作用域和函数作用域（例如，我们必须将代码包在函数内来限制作用域），这导致很多问题：

**情况1：内层变量覆盖外层变量**

**情况2：变量泄露，成为全局变量**

ES6 提供 let 和 const 来代替 var 声明变量，新的声明方式支持用大括号表示的块级作用域，这会带来一些好处：

==不再需要立即执行的函数表达式(IIFE)==

==循环体中的闭包不再有问题==

==防止重复声明变量==

```js
//for循环有个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。 
for (let i=0;i < 3;i++) {
    let i='abc';
    console.log(i); //abc abc abc
}

{
    let a=10;
    var b=1;
}
console.log(a); // ReferenceError: a is not defined.
console.log(b); // 1

//块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了。 // IIFE 写法
(function () {
    var tmp=...;
}()); 
// 块级作用域写法
{
    let tmp=...;
}
```

## 区别

1. const的本质是指向变量所在的内存地址不得改变
   简单类型，等同于常量
   复合类型，指向的内存地址，该类型中的数据是可变的

   ```js
   //const一旦声明变量，就必须立即初始化，初始化后的值就不能改变，不能留到以后赋值
   const PI = 3.14;
   console.log(PI); //3.14
   PI = 5;
   console.log(PI); //Assignment to constant variable
   //由于const声明的变量是指向此变量所在的内存地址
   //当变量是复合类型时
   const foo = {};
   //可以为foo添加属性或方法
   foo.prop = 123;
   const foo = {}; //error
   ```

# 变量的解构赋值

## 默认值

**注：ES6 内部使用严格相等运算符（`===`）来判断一个位置是否有值。所以，只有当一个数组成员或对象属性值严格等于`undefined`，==默认值==才会生效**

## 数组的解构赋值

**数组解构也可以用于赋值上下文，但不需要用小括号包裹表达式**。这点跟对象解构的约定不同

```js
let colors = ["red", "green", "blue"],
  firstColor = "black",
  secondColor = "purple";
[firstColor, secondColor] = colors;
console.log(firstColor); //    "red" 
console.log(secondColor);    // "green"
```

**默认值**

```js
let [x = true] = []; //x = true
let [x = 1] = [undefined]; //x=1
let [x = 1] = [null]; //x=null,在非严格情况下null=undefined
//当x能取到值，函数f根本不会执行
function f() {
    console.log('aaa');
    return undefined;
}
let [x=f()]=[1];
//相当于 
let x;
if ([1][0]===undefined) {
    x=f();
}else {
    x=[1][0];
}
```

**从数组中提取值，按照对应位置，对变量赋值**

```js
let [a, b, c] = [1, 2, 3];//a=1,b=2,c=3
let [a, [b], c, d, ...f] = [1, ['foo'], 'str'];//a=1,b='foo',c='str',d=undefined,f=[]
```

**如果等号的右边不是数组（或者严格地说，不是可遍历的结构），那么将会报错**

```js
// 报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};
//要么转为对象以后不具备 Iterator 接口（前五个表达式），要么本身就不具备 Iterator 接口（最后一个表达式）
```

**数组转对象**

```js
const points = [
  [4,5],
  [10,1],
  [0,40]
];
let newPoints = points.map(pair => {
  const [x,y] = pair;
  return {x,y}
})
//还可以通过以下办法，更为简便
let newPoints = points.map(([x,y]) => {
  return {x,y}
})
console.log(newPoints);
```



## 对象的解构赋值

==如果变量已声明或已初始化了，就必须用圆括号来包裹解构赋值语句==，因为暴露的花括号会被解析为代码块语句，而代码块语句是不允许在赋值操作符左侧出现的，而圆括号会被解析为表达式

```js
let node = {type:"Identifier",    name:"foo"},    
type = "Literal",name = 5;
({type,name}= node);//    使用解构来分配不同的值 
console.log(type); //    "Identifier" 
console.log(name); //    "foo"
```

**默认值**

```js
let {x = 3} = {}; x // 3
let {x, y = 5} = {x: 1}; x // 1，y // 5
let {x: y = 3} = {}; y // 3
let {x: y = 3} = {x: 5}; y // 5
let {x = 3} = {x: undefined}; x // 3
let {x = 3} = {x: null}; x // null
```

[对象的解构与数组不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。]() 

```js
//变量名与属性名一致
let { bar, foo } = { foo: "aaa", bar: "bbb" };//foo= "aaa",bar="bbb"

//变量名与属性名不一致
let { foo: baz, bar: f } = { foo: 'aaa', bar: 'bbb' };//baz='aaa',f='bbb'
```

对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。 

[由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。]()

```js
let arr=[1, 2, 3];
let { 0: first, [arr.length - 1]: last} = arr;  //first // 1 ,last // 3
```

对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。 

```js
let { log, sin, cos } = Math;
console.log(sin(0));//0
```

```.js
//如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错
let {foo: {bar}} = {baz: 'baz'};// 报错,因为foo为undefined，再取子属性就会报错

//将一个已经声明的变量用于解构赋值，必须非常小心
// 错误的写法
let x;
{x} = {x: 1}; //JavaScript 引擎会将{x}理解成一个代码块
console.log(x) // SyntaxError: syntax error
// 正确的写法
let x;
({x} = {x: 1});
```

## 字符串的解构赋值

字符串被转换成了一个类似数组的对象 

```js
const [a, b, c, d, e] = 'hello'; //a="h",b="e",c="l",d ="l",e= "o"
let {length : len} = 'hello';//len = 5，自带的length属性
```

## 数值和布尔值的解构赋值

解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。 

但`undefined`和`null`无法转为对象，所以对它们进行解构赋值，都会报错 

```js
let {toString: s} = 123;
s === Number.prototype.toString // true，说明数值123被转为对象了，它也就有了toString属性

let {toString: s} = true;
s === Boolean.prototype.toString // true，说明布尔值true被转为对象了，它也就有了toString属性

let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError
```

## 函数参数的解构赋值

##### 默认值

```js
//undefined会触发函数参数的默认值。
[1, undefined, 3].map((x = 'yes') => x);
// [ 1, 'yes', 3 ]
```

```js
function move({x = 0, y = 0} = {}) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]
```

[注意，下面的写法是为函数`move`的参数指定默认值，而不是为变量`x`和`y`指定默认值]() 

```js
function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]
```

## 常见用法

##### (1)、交换变量值

```js
let x = 1;
let y = 2;
[x, y] = [y, x];
```

##### (2)、**从函数返回多个值** 

函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回 

```js
// 返回一个数组
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

// 返回一个对象
function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();
```

##### (3)、**函数参数的定义** 

解构赋值可以方便地将一组参数与变量名对应起来。 

```js
// 参数是一组有次序的值
function f([x, y, z]) { ... }
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});
```

##### (4)、**提取 JSON 数据** 

解构赋值对提取 JSON 对象中的数据，尤其有用。 

```js
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;
console.log(id, status, number);// 42, "OK", [867, 5309]
```

##### (5)、**函数参数的默认值** 

```js
//避免在函数体内写 let c = c || 11;
function ({a = true, b = function(){}, c = 11} = {}) {}
```

##### (6)、**遍历 Map 结构** 

```js
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
//获取键名和键值
for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// 获取键名
for (let [key] of map) {
  // ...
}
// 获取键值
for (let [,value] of map) {
  // ...
}
```

# rest和模板字符串

## rest

注：

==rest 参数之后不能再有其他参数，每个函数最多只能声明一个rest参数且只能是最后一个参数==

```js
function add(a,...b,c){}//error
```

==rest参数不能用于对象字面量setter之中==

```js
let object = {
    set name(...value){   //报错
        //执行一些逻辑
    }
}
```

函数的length属性，不包括 rest 参数和默认值以及后面的参数即不会导致length属性值发生变化

rest参数用于获取多余的参数，这样在函数中就不需要使用arguments对象了

```js
// function add(...num) {}
let add=(...num)=> {
    let sum=0; 
    // for (const val of num) { sum += val; }//10
    // num.map((val) => {sum += val});//10
    num.forEach((val)=> {sum += val}); //10
    return sum;
}; 
// let add = (...num) => eval(num.join('+'));//10
console.log('求和:' + add(1, 2, 3, 4)); //10
```

rest 参数搭配的变量是一个==真正的数组==，该变量将多余的参数放入数组中

```js
let a=[1,2,3];
let b=[4, 5,6];
console.log('数组合并：', [...a, ...b]); //[1,2,3,4,5,6]
console.log(...b, 1, 2, 3); //4,5,6,1,2,3
let [x, y, ...z]='abcdefg';
console.log(...z); //cdefg
console.log(z);//['c','d','e','f','g']
```

## 展开运算符

与剩余参数关联最密切的就是扩展运算符

剩余参数允许你把多个独立的参数合并到一个数组中

扩展运算符则允许将一个数组分割，并将各个项作为分离的参数传给函数

**当用在字符串或数组前面时称为扩展运算符,个人觉得可以理解为rest参数的逆运算，用于将数组或字符串进行拆解。有些时候，函数不允许传入数组，此时使用展开运算符就很方便**，如（Math.max()的参数）

```js
let values = [25,50,75,    100]
//等价于console.log(Math.max(25,50,75,100));
console.log(Math.max(...values));    //100
//参数混用
console.log(Math.max(...values,0));    //0
```

**扩展运算符拆解字符串与数组**

```js
var array = [1,2,3,4,5];
console.log(...array);//1 2 3 4 5
var str = "String";
console.log(...str);//S t r i n g
```

**拼接**

数组拼接为一个新数组，字符串拼接为一个字符串数组

```js
var defaultColors = ["red","greed"];
var favoriteColors = ["orange","yellow"];
console.log(["blue","green",...defaultColors,...favoriteColors]
//["blue", "green", "red", "greed", "orange", "yellow"]
```

## 模板字符串

模板字符串是增强版的字符串，用反引号（`）标识。**它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量

模板字符串中嵌入变量和函数，需要将变量名写在${}之中

# 函数扩展

## 函数参数的默认值

##### (1)、基本用法

1. 参数变量是默认声明的，所以不能用let或const再次声明。否则会报错

   ```js
   function (x) {
       let x;//error
       const x;//error
   }
   ```

2. [使用参数默认值时，函数不能有同名参数。]() 

   ```js
   function foo(x, x, y) {...} // 不报错
   
   function foo(x, x, y = 1) {...}// 报错
   ```

3. [参数默认值不是传值的，而是每次都重新计算默认值表达式的值]() 

   ```js
   let x = 99;
   function foo(p = x + 1) {
     console.log(p);
   }
   foo() // 100
   x = 100;
   foo() // 101,重新计算了x+1的值
   ```

```js
//es5写法
function log(x, y) {
  y = y || 'World';
  console.log(x, y);
}
//es6写法
function log(x, y = 'World') {
  console.log(x, y);
}
```

##### (2)、与解构赋值默认值结合使用

```js
//只使用了对象的解构赋值默认值，没有使用函数参数的默认值
function foo({x, y=5}) {
    console.log(x, y);
}
foo({}) // undefined 5
foo({x: 1}) // 1 5
foo({x: 1, y: 2}) // 1 2
foo() // TypeError: Cannot destructure property `x` of 'undefined' or 'null'.

//提供函数参数的默认值,就不会报错
function foo({x, y=5} = {}) {
    console.log(x, y);
}
foo() // undefined 5

//没有设置对象解构赋值的默认值
function m2({x, y} = {x: 0, y: 0}) {
    return [x,y];
}
m2({}) //undefined, undefined
m2({z: 3;}) //undefined, undefined
```

##### (3)、参数默认值的位置

建议放在函数的参数最后（若有rest参数，则放在rest前面）

```js
function (a, b, c=1, ...z) {}
```

##### (4)、length属性

只计算默认值参数或者rest参数之前的参数个数

```js
(function(...args) {}).length // 0
(function (a = 0, b, c) {}).length // 0
(function (a, b = 1, c) {}).length // 1
```

##### (5)、作用域

一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个[单独的作用域]()（context）。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。 

```js
//调用函数f时，参数形成一个单独的作用域。这个作用域里，y的默认值变量x指向的是第一个参数x，并非全局变量x。
var x = 1;
function f(x, y = x) {
  console.log(y);
}
f(2) // 2

//参数所形成作用域并没有定义变量x，它就会去此函数的外层找变量x，如果一直到全局都没找到，就会报错
let x = 1;
function f(y = x) {
  let x = 2;
  console.log(y);
}
f() // 1

//由于参数会自动被声明，又形成了单独作用域，相当执行let x=x，形成了TDZ，所以报错
var x = 1;
function foo(x = x) {...}
foo() // ReferenceError: x is not defined
```

例子：

```js
var x = 1;
function foo(x, y = function() { x = 2; }) {
  var x = 3;
  y();
  console.log(x);// 3
}
foo();
第一层作用域： x=1,此处指向全局
第二层作用域： 由参数形成的x,y
第三层作用域：一个是参数y所指向的函数形成的作用域，它指向y所在作用域的变量x
    	   另一个是foo函数形成的作用域，即x=3，如果此变量去掉var，它就指向参数中的x
```

## 箭头函数

==特点：缩减代码和改变this指向==

1. **如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错， 因为javascript引擎为认为大括号是代码块**

```js
let getTempItem = id => { id: id, name: "Temp" };// 报错

let getTempItem = id => ({ id: id, name: "Temp" });// 不报错
```

```js
//箭头函数可以与变量解构结合使用。
const full = ({ first, last }) => first + ' ' + last;
full({first:'aa',last:'bb'})//aa bb;

//rest 参数与箭头函数结合的例子
let add = (...num) => eval(num.join('+'));//10
```

2.**如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回**

```js
const double = (number,number2) => {
   sum = number + number2 
   return sum;
 }
```

## 箭头函数使用注意事项

1. 函数体内的`this`对象，是定义时所在的对象，而不是使用时所在的对象。

   `this`对象的指向是可变的，[但是在箭头函数中，它是固定的。]()  

2. 不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误。 

3. 不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。 

4. 不可以使用`yield`命令，因此箭头函数不能用作 Generator 函数。 

##### this对象

`this`指向的固定化，并不是因为箭头函数内部有绑定`this`的机制，实际原因是箭头函数根本没有自己的`this`，导致内部的`this`就是外层代码块的`this`。正是因为它没有`this`，所以也就不能用作构造函数。 

```js
for (let i = 0; i < divs.length; i++) {
    divs[i].onclick = function () {
        console.log(this); //指向对应的DOM对象
    }
}
for (let i = 0; i < divs.length; i++) {
	divs[i].onclick = () => {
		console.log(this);//指向所在的对象，此处为window 	
	}
}

var handler = {
  id: '123456',
  init: function() {
    document.addEventListener('click',
      event => this.doSomething(event.type), false);
  },
  doSomething: function(type) {
    console.log('Handling ' + type  + ' for ' + this.id);
  }
};

//以下代码之中，只有一个this，就是函数foo的this。因为所有的内层函数都是箭头函数，都没有自己的this，它们的this其实都是最外层foo函数的this。
function foo() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      };
    };
  };
}
```

# 数组扩展

## Array.from()

将==类数组对象==或==可遍历对象==（包括 ES6 新增的数据结构 Set 和 Map）转换为==真数组==

### **如果一个对象的所有键名都是正整数或零，并且有length属性**，那么这个对象就很像数组，称为伪数组。典型的伪数组有**函数的arguments对象，以及大多数 DOM 元素集，还有字符串**

## Array.of()

==将一系列值转换成数组，*Array.of( )方法总会创建一个包含所有传入参数的数组，而不管参数的数量与类型*==

**Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载，而且他们的行为非常统一**

```js
//使用new Array()构造器的缺点：当使用单个数值参数来调用 Array 构造器时，数组的长度属性会被设置为该参数
//而使用Array.of()就不出现此情况
let items = new Array(2) ;
console.log(items.length) ; // 2
console.log(items[0]) ; // undefined
console.log(items[1]) ;

let items = new Array(1, 2) ;
console.log(items.length) ; // 2
console.log(items[0]) ; // 1
console.log(items[1]) ; // 2

let items = Array.of(1, 2);
console.log(items.length); // 2
console.log(items[0]); // 1
console.log(items[1]); // 2

items = Array.of(2);
console.log(items.length); // 1
console.log(items[0]); // 2
```

## find()和findIndex()

数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined

```js
[1, 4, -5, 10].find((n) => n < 0) // -5
```

数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1

```js
[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}) // 2
```

## includes()

Array.prototype.includes方法返回一个==布尔值==，表示某个数组是否包含给定的值。该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始

使用indexOf()检查是否包含某个值的缺点：

**不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。**

**它内部使用严格相等运算符（===）进行判断，这会导致对NaN的误判**

```js
[NaN].indexOf(NaN) // -1
[NaN].includes(NaN) // true
```

## entries()、keys()、values()

主要用来遍历数组，返回一个遍历器对象，使用for...of...来遍历

```js
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

# 对象扩展（未完）

### 1、属性的简洁表示法



# Symbol

### 1、概述

1. 在使用别人提供的对象后，又想为其添加新的方法，为了避免属性名冲突，引入数据类型symbol

2. `javascript`的七种数据类型：`Number`,`String`,`Boolean`,`Object`,`null`,`undefined`,`Symbol`

3. 对象的属性名现在可以有两种类型，一种是原来就有的`字符串`，另一种就是新增的 `Symbol 类型` 

4. 属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突 

5. [**`Symbol`函数前不能使用`new`命令，否则会报错**]() 

6. `Symbol`函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，只是利于区分  

7. Symbol 的参数是一个对象，就会调用该对象的`toString`方法，将其转为字符串，然后才生成一个 Symbol 值 

   ```js
   let obj = {
       toString() {
           return '对象'
       }
   }
   const s = Symbol(obj);
   console.log(s);//对象
   ```

8. `Symbol`函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的`Symbol`函数的返回值是不相等的。 

9. Symbol 值不能与其他类型的值进行运算，会报错 

### 2、属性名

1. 只要属性名由Symbol生成，就不会出现同名，[**Symbol 值作为对象属性名时，不能用点运算符**](),只能通过[`方括号结构`]()和`Object.defineProperty`指定为一个 Symbol 值 
2. Symbol 值作为属性名时，该属性还是公开属性，不是私有属性 

```js
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';
a.mySymbol = 'Hello!';//点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值
// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```

### 3、属性名的遍历

1. Symbol 作为属性名，该属性不会出现在`for...in`、`for...of`循环中，也不会被`Object.keys()`、`Object.getOwnPropertyNames()`、`JSON.stringify()`返回 

2. 因为它不是私有属性，有个`Object.getOwnPropertySymbols`方法，可以获取指定对象的所有 Symbol 属性名 

3. `Object.getOwnPropertySymbols`方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值 

   `Reflect.ownKeys`方法可以返回所有类型的键名，包括常规键名和 Symbol 键名 

   ```js
   let a = Symbol('a');
   let b = Symbol('b');
   let obj = {
       [a]: 1,
       [b]: 2,
       c:3
   }
   let os = Object.getOwnPropertySymbols(obj);
   console.log(os)//[ Symbol(a), Symbol(b) ]
   console.log(Reflect.ownKeys(obj))//[ 'c', Symbol(a), Symbol(b) ]
   ```

### 4、Symbol.for()，Symbol.keyFor()

1. `Symbol.for()`不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的`key`是否已经存在，如果不存在才会新建一个值 ,而Symbol()每次调用都会返回一个新的 Symbol 类型的值

   如果想使用同一个Symbol值，就要使用Symbol.for()

   ```js
   let a = Symbol.for('abc');
   let b = Symbol.for('abc');
   console.log(a === b)//true
   ```

2. `Symbol.keyFor`方法返回一个已登记的 Symbol 类型值的`key`。 

   ```js
   let a = Symbol('abc');
   console.log(Symbol.keyFor(a));//undefined,变量a未登记的Symbol值
   let b = Symbol.for('abc');
   console.log(Symbol.keyFor(b));//abc,变量b是个已登记的Symbol值
   ```

# Set&Map

### 1、Set

1. Set 本身是一个构造函数，用来生成 Set 数据结构，它的成员的值都是唯一的，没有重复的值。

   ```js
   let arr = [1, 2, 3, 4, 4, 5, 5];
   let set = new Set(arr);
   console.log(set);//Set { 1, 2, 3, 4, 5 }
   //去除数组重复成员
   function dedupe(array) {
       // return Array.from(new Set(array));
       return [...(new Set(array))];
   }
   dedupe([1, 1, 2, 3]) // [1, 2, 3]
   ```

2. Set 函数可以接受一个数组（或者具有 `iterable` 接口的其他数据结构）作为参数，用来初始化。 

   ```js
   //参数为数组
   let arr = [1, 2, 3, 4, 4, 5, 5];
   let set = new Set(arr);
   console.log([...set]);
   console.log(set.size)
   //参数为类数组
   const set = new Set(document.querySelectorAll('div'));
   set.size // 56
   //传参为数组
   let obj = {a: 2,b: 3,}
   let set = new Set([obj])//以数组形式传入
   set.add({a: 1,b: 2})//使用add()添加
   console.log(set)//Set { { a: 2, b: 3 }, { a: 1, b: 2 } }
   ```

3. Set 内部判断两个值是否不同 ,类似于精确相等运算符（`===`） ,两个`NaN`是相等的，两个对象总是不相等的 

   ```js
   let set = new Set();
   let a = NaN;
   let b = NaN;
   set.add(a);
   set.add(b);
   set // Set {NaN}
   ```

#### 1、Set实例的属性和方法

1. Set 结构的实例有以下属性。

   - `Set.prototype.constructor`：构造函数，默认就是`Set`函数。
   - `size`：返回`Set`实例的成员总数。

2. Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员） 

   - `add(value)`：添加某个值，返回 Set 结构本身。
   - `delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
   - `has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
   - `clear()`：清除所有成员，没有返回值。

   ```js
   let s = new Set();
   s.add(1).add(2).add(3);
   console.log(s.has(1))//true
   console.log(s.size);//3
   s.delete(3);
   console.log(s.has(3))//false
   s.clear();
   console.log(s)//Set {}
   ```

#### 2、遍历

1. Set 结构的实例有四个遍历方法，可以用于遍历成员。

   - `keys()`：返回键名的遍历器
   - `values()`：返回键值的遍历器
   - `entries()`：返回键值对的遍历器
   - `forEach()`：使用回调函数遍历每个成员

2. `Set`的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用 

3. Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的`values`方法 

   ```js
   Set.prototype[Symbol.iterator] === Set.prototype.values
   ```

##### (1)、**keys()，values()，entries()** 

1. 由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以`keys`方法和`values`方法的行为完全一致 

   ```js
   let set = new Set([1, 2, 3])
   for (let s of set.keys()) {
       console.log(s)//1, 2, 3
   }
   for (let s of set.values()) {
       console.log(s)//1, 2, 3
   }
   for (let s of set) {//等同于遍历values
       console.log(s)//1, 2, 3
   }
   for (let s of set.entries()) {
       console.log(s)//[1,1],[2,2],[3,3]
   }
   ```

##### (2)、forEach()

1. Set 结构的实例与数组一样，也拥有`forEach`方法，用于对每个成员执行某种操作，没有返回值。 

   ```js
   set = new Set([1, 4, 9]);
   set.forEach((value, key) => console.log(key + ' : ' + value))
   // 1 : 1, 4 : 4, 9 : 9
   ```

##### (3)、应用

1. 实现并集（Union）、交集（Intersect）和差集 （Difference） 

   ```js
   let a = new Set([1, 2, 3]);
   let b = new Set([4, 3, 2]);
   // 并集
   let union = new Set([...a, ...b]);// Set {1, 2, 3, 4}
   // 交集
   let intersect = new Set([...a].filter(x => b.has(x)));// set {2, 3}
   // 差集
   let difference = new Set([...a].filter(x => !b.has(x)));// Set {1}
   ```

2. 同步改变原来的 Set 结构，目前没有直接的方法，但有两种变通方法 

   ```js
   // 方法一
   let set = new Set([1, 2, 3]);
   set = new Set([...set].map(val => val * 2));
   // set的值是2, 4, 6
   
   // 方法二
   let set = new Set([1, 2, 3]);
   set = new Set(Array.from(set, val => val * 2));
   // set的值是2, 4, 6
   ```

### 2、WeakSet

1. WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
   - WeakSet 的成员只能是对象，而不能是其他类型的值 
   - WeakSet 中的对象都是弱引用 
2. WeakSet 结构有以下三个方法。
   - **WeakSet.prototype.add(value)**：向 WeakSet 实例添加一个新成员。
   - **WeakSet.prototype.delete(value)**：清除 WeakSet 实例的指定成员。
   - **WeakSet.prototype.has(value)**：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

### 3、Map

1. 由于对象只接受字符串作为键名 ,Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应 

2. 不仅仅是数组，任何具有 Iterator 接口、[**且每个成员都是一个双元素的数组**]()的数据结构（详见《Iterator》一章）都可以当作`Map`构造函数的参数 

   ```js
   //Set和Map都可以用来生成新的 Map
   let s = new Set([
       [1, 2],
       [3, 4]
   ])
   let m = new Map(s);
   console.log(m)//Map { 1 => 2, 3 => 4 }
   let m1 = new Map(m);
   console.log(m1);//Map { 1 => 2, 3 => 4 }
   ```

3. 如果对同一个键多次赋值，后面的值将覆盖前面的值。 

   ```js
   let m = new Map();
   m.set('a', 123).set('a', 234);
   console.log(m)//Map { 'a' => 234 }
   ```

4. [**注意，只有对同一个对象的引用，Map 结构才将其视为同一个键**]() 

   ```js
   let m = new Map();
   m.set('a', 234).set([1], 111);
   console.log(m.get([1]))//undefined
   console.log(m.get('a'))//234
   ```

#### 1、实例的属性和方法

1. Map 结构的实例有以下属性。
   - `Map.prototype.constructor`：构造函数，默认就是`Map`函数。
   - `size`：返回`Map`实例的成员总数。
2. Map 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员） 
   - `set(key,value)`：设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键 ，因此可以采用链式写法。 
   - `get(key)` ：读取`key`对应的[**键值**]()，如果找不到`key`，返回`undefined`。 
   - `has(key)`：返回一个布尔值，表示某个[**键**]()是否在当前 Map 对象之中 
   - `delete(key)`：删除某个[**键**]()，返回`true`。如果删除失败，返回`false`。 
   - `clear()`：清除所有成员，没有返回值。

```js
let map = new Map();
 // 键分别是字符串、数值、 undefined
map.set('abc', 6).set(111, 'sss').set(undefined, 'nah')

console.log(map.size) //3
console.log(map.get('abc')) //6
console.log(map.has(111)) //true
map.delete(undefined);
console.log(map.has(undefined))//false
```

#### 2、遍历方法

Map 结构原生提供三个遍历器生成函数和一个遍历方法。

- `keys()`：返回键名的遍历器。
- `values()`：返回键值的遍历器。
- `entries()`：返回所有成员的遍历器。
- `forEach()`：遍历 Map 的所有成员。

Map 结构的实例默认可遍历，它的默认遍历器生成函数就是它的`entries`方法 

```js
map[Symbol.iterator] === map.entries // true
```

[**Map 的遍历顺序就是插入顺序。**]() 

```js
const map = new Map([
    ['F', 'no'],
    ['T', 'yes'],
]);
for (let key of map.keys()) {
    console.log(key);//F T
}
for (let value of map.values()) {
    console.log(value);//"no" "yes"
}
for (let [key, value] of map.entries()) {
    console.log(key, value);//"F" "no","T" "yes"
}
// 等同于使用map.entries()
for (let [key, value] of map) {
    console.log(key, value);//"F" "no","T" "yes"
}
map.forEach(function(value, key, map) {
    console.log("Key: %s, Value: %s", key, value);
});
//Key: F, Value: no
//Key: T, Value: yes
```

#### 3、与其他数据结构的互相转换

##### (1)、**Map 转为数组** 

Map 转为数组最方便的方法，就是使用扩展运算符（`...`） 

```js
const myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
console.log([...myMap])//[ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
```

##### (2)、**数组 转为 Map** 

将数组传入 Map 构造函数，就可以转为 Map。 

##### (3)、**Map 转为对象** 

如果所有 Map 的键都是字符串，它可以无损地转为对象。 

如果有非字符串的键名，那么这个键名会被转成字符串，再作为对象的键名。 

```js
const myMap = new Map().set('yes', true).set('no', false).set(10, 100);
function fn(mapObj) {
    let obj = Object.create(null);
    for (let [key, value] of mapObj) {
        obj[key] = value;
    }
    return obj;
}
console.log(fn(myMap)) //{ '10': 100, yes: true, no: false }
```

##### (4)、**对象转为 Map** 

```js
function fn(obj) {
    let map = new Map();
    for (let key of Object.keys(obj)) {
        map.set(key, obj[key])
    }
    return map;
}
let obj = {yes: true,no: false,10: 100}
console.log(fn(obj))//Map { '10' => 100, 'yes' => true, 'no' => false }
console.log([...fn(obj)])//[ [ '10', 100 ], [ 'yes', true ], [ 'no', false ] ]
```

### 4、WeakMap

# Proxy

## 1、概述

1. Proxy用来处理默认行为（如get、set等），Proxy会在目标对象之前架设一层[“拦截”](),如果外界对该对象进行访问，都必须先通过这层拦截才可以访问。

2. Proxy 对象 的写法，`new Proxy()`表示生成一个`Proxy`实例，`target`参数表示所要拦截的目标对象，`handler`参数也是一个对象，用来定制拦截行为 

   ```JS
   var proxy = new Proxy(target, handler);
   ```

## 2、Proxy 实例的方法

### 1、get(**target, propKey, receiver** )

用于拦截某个属性的[**读取**]()操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选 

### 2、set(**target, propKey**, value**, receiver** )

用来拦截某个属性的[**赋值**]()操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。 

### 3、**apply(target, object, args)** 

拦截函数的调用、`call`和`apply`操作 。`apply`方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（`this`）和目标对象的参数数组。 

### 4、**has(target, propKey)** 

### 5、construct(**target, args** ) 

### 6、**deleteProperty(target, propKey)** 

### 7、**defineProperty(target, propKey, propDesc)** 

### 8、**getOwnPropertyDescriptor(target, propKey)** 

### 9、**getPrototypeOf(target)** 

### 10、**isExtensible(target)** 

### 11、**ownKeys(target)** 

### 12、**preventExtensions(target)** 

### 13、**setPrototypeOf(target, proto)** 

## 3、Proxy.revocable()

`Proxy.revocable`方法返回一个可取消的 Proxy 实例。 

# Promise对象

1. 使用`Promise`对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，`Promise`对象提供统一的接口，使得控制异步操作更加容易。 

2. 对象的状态不受外界影响。`Promise`对象代表一个异步操作，有三种状态：`pending`（进行中）、`resolved`（已成功）和`rejected`（已失败）。

   Promise 的状态一旦改变，就永久保持该状态，不会再变了  

3. `Promise`构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject` 

   ```js
   //Promise 状态已经变成resolved，再抛出错误是无效的。
   //Promise 状态已经变成rejected，resolve()也是无效的
   new Promise((resolve, reject) => {
       resolve('我是resolve的参数'),
       reject('我是reject抛出的错误')
   }).then(
       value => console.log('resolve:' + value),//resolve:我是resolve的参数
       error => console.log('reject:' + error)
   )
   
   new Promise((resolve, reject) => {
       // reject('我是reject抛出的错误'),
       throw new Error('错误')// 等同与 reject('我是reject抛出的错误')
       resolve('我是resolve的参数')
   }).then(
       value => console.log('resolve:' + value),
       error => console.log('reject:' + error)//错误
   )
   ```

### Promise 实例方法 

- then(resolve，reject)：`then`方法返回的是一个新的`Promise`实例 ，`then`方法的第一个参数是`resolved`状态的回调函数，第二个参数（可选）是`rejected`状态的回调函数 

  建议总是使用`catch`方法，而不使用`then`方法的第二个参数 

  ```js
  //1、状态为resolve
  new Promise((resolve, reject) => resolve('我是resolve的参数'))
      .then(value => console.log(value))//我是resolve的参数
  
  //2、状态为reject
  new Promise((resolve, reject) => reject('我是reject抛出的错误'))
      .then(
          value => console.log('resolve:' + value),
          error => console.log('reject:' + error)//我是reject抛出的错误
      )
  ```

- catch(error)：相当于then(null, rejection) ，用于指定发生错误时的回调函数。`catch`方法返回的是一个 Promise 对象 ，后面可以接着调用`then`方法。 如果没有报错，则会跳过`catch`方法 ，跳过了`catch`方法，要是后面的`then`方法里面报错，就与前面的`catch`无关了 ，如果`catch`方法里面报错，只能通过后面的`catch`方法来捕获

  ```js
  new Promise((resolve, reject) => reject('我是reject抛出的错误'))
      .catch(error => console.log('catch:' + error))//catch:我是reject抛出的错误
  
  function fn(value) {//返回一个Promise的实例，并获取rs的值
      return new Promise((rs, rj) => rs(value))
  }
  fn('111').then(rs => {
          console.log(rs)//111
          return fn('222')
      })
      .then((rs, rj) => {
          if (Object.is(rs, '222')) {
              throw new Error('错误')
          }
      })
      .catch(error => console.log('catch:' + error))//'错误,它们之中任何一个抛出的错误，都会被最后一个catch捕获
  ```

- finally()：`finally`方法用于指定不管 Promise 对象最后状态如何，都会执行的操作 ，不接受任何参数 

### Promise 静态方法 

- Promise.all ：用于将多个 Promise 实例，包装成一个新的 Promise 实例。 

- Promise.race ：用于将多个 Promise 实例，包装成一个新的 Promise 实例。 

- Promise.resolve ：将现有对象转为 Promise 对象 

  `Promise.resolve`方法的参数分成四种情况。 

  - 参数是一个 Promise 实例 
  - **参数是一个thenable对象** 
  - **参数不是具有then方法的对象，或根本就不是对象** 
  - **不带有任何参数** 

- Promise.reject(reason)  ：返回一个新的 Promise 实例，该实例的状态为`rejected`。 

### 应用



















# Iterator和for...of

JavaScript 原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6 又添加了Map和Set

**任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）**

## Iterator的作用：

- 为各种数据结构，提供一个统一的、简便的访问接口；
- 使得数据结构的成员能够按某种次序排列
- ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。

## 原生具备iterator接口的数据(可用for of遍历)

- Array
- set容器
- map容器
- String
- 函数的 arguments 对象
- NodeList 对象

## 几种遍历方式比较

- for of 循环不仅支持数组、大多数伪数组对象，也支持字符串遍历，此外还支持 Map 和 Set 对象遍历。
- for in循环可以遍历字符串、对象、数组，不能遍历Set/Map
- forEach 循环不能遍历字符串、对象,可以遍历Set/Map

# Generator

# async

# class基本语法

### 1、简介

1. 严格模式：ES6 实际上把整个语言升级到了严格模式 

   [**类和模块的内部，默认就是严格模式**]()，所以不需要使用`use strict`指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。 

2. class类写法不需要加上`function`这个关键字 ，方法之间不需要逗号分隔 ，使用时必须用`new`，也不能当普通函数运行(否则会报错),也不存在变量提升

```js
class Person {
    constructor() {...}
    toString() {...}
    doSomething() {...}
}
let p = new Person();
//使用在前，声明在后，会报错
{
    new Foo(); // ReferenceError
	class Foo {}                 
} 
```

1. es6与es5写法区别和枚举区别

```js
//es5
function Person() {
    this.age = 20;
    this.toString = function () {}
}
Person.prototype.getAge = function () {
    console.log(this.age);
}
var p = new Person();
Object.defineProperty(p, 'sex', {
    value: 'male',
    enumerable: true //是否可枚举,默认为false
});

//自身+原型+通过Object.defineProperty()添加的可枚举或通过原型对象绑定的可以枚举属性 
for (var key in p) {
    console.log('for in:' + key); 
}//age toString getAge p

console.log('Object.keys:' + Object.keys(p)); //自身的+通过Object.defineProperty()添加的可枚举
//age toString p

console.log('JSON.stringify:' + JSON.stringify(p)); //自身的+通过Object.defineProperty()添加的可枚举,并序列化为json对象
//{"age":20,"sex":"male"}
```

```js
//es6 class的所有方法都是定义在类的prototype属性上的，在类内部定义的方法，都是不可枚举的，但通过原型对象绑定的可以枚举
class Person {
    //内部定义
    constructor() {
        this.age = 20;
    }
    toString() {}//内部定义的，不可枚举
    valueOf() {}//内部定义的，不可枚举
}
//
Person.prototype.getAge = function () {
    console.log(this.age);
}
Object.assign(Person.prototype, {
    a() {},
    b() {}
})
var p = new Person();
Object.defineProperty(p, 'sex', {
    value: 'male',
    enumerable: true //是否可枚举,默认为false
});
//以下方法均取不到内部定义的方法
//自身+原型+通过Object.defineProperty()添加的可枚举或通过原型对象绑定的可以枚举属性 
for (var key in p) {
    console.log('for in:' + key); 
}//age getAge() sex a() b()

console.log('Object.keys:' + Object.keys(p)); //age sex
console.log('JSON.stringify:' + JSON.stringify(p)); //{"age":20,"sex":"male"}
```

### 2、constructor

1. `constructor`方法是类的默认方法，通过`new`命令生成对象实例时，自动调用该方法。一个类必须有`constructor`方法，如果没有显式定义，一个空的`constructor`方法会被默认添加 

   ```.js
   class Point {...}
   
   // 等同于
   class Point {
     constructor() {}
   }
   ```

2. `constructor`方法默认返回实例对象（即`this`），完全可以指定返回另外一个对象。 

   ```js
   class Foo {
     constructor() {
       return Object.create(null);
     }
   }
   new Foo() instanceof Foo //false
   ```

### 3、表达式写法

```js
const MyPerson = class Person {
	getName(){ return Person.name;}
}
//注：这个类的名字是MyPerson而不是Person，Person只在 Class 的内部代码可用，指代当前类
let p = new MyPerson();
p.getName();//Person
Person.getName();//Person is not defined
//如果没有使用到Person，可以简写为
let person = new class {
 	constructor(name){this.name=name;}
    sayName(){console.log(this.name)}
}('lisi');
person.sayName();//lisi
```

### 4、this的指向

1. 类的方法内部如果含有`this`，它[默认指向类的实例]() 

```js
//单独使用该方法，很可能报错 
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}
const p = new Person('lisi');
const { getName } = p;
getName();//Cannot read property 'name' of undefined
```

解决方法如下：

1. 在构造方法中绑定`this` 

   ```js
   class Person {
       constructor(name) {
           this.name = name;
           this.getName = this.getName.bind(this);
       }
       getName() {
           console.log(this.name);
       }
   }
   const p = new Person('lisi');
   const {bgetName} = p;
   getName();//lisi
   ```

2. 箭头函数 

   ```js
   class Person {
       constructor(name) {
           this.name = name;
           this.getName = () => {
              console.log(this.name);
            }
       }
   }
   const p = new Person('lisi');
   const {getName} = p;
   getName();//lisi
   ```

### 5、get&set

```js
class Person {
    constructor() {...}
    set age(value) {
        if (value < 0 || value > 120) {
            throw new Error("invalid value")
        } else {
            this._age = value;
        }
    }
    get age() {
        return this._age
    }
}
let p = new Person();
p.age = 220;//先进入set方法，不符合条件抛出error，符合条件重新获取age的值，然后get方法返回新值
console.log(p.age);//error:"invalid value"
```

### 6、静态方法&静态属性&实例属性

1. **静态方法**:类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上`static`关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法” 

   ```js
   class Person {
       static getName() {
           console.log('lisi');
       }
   }
   let p = new Person();
   Person.getName();//lisi
   p.getName();//TypeError: p.getName is not a function
   ```

   [注意，如果静态方法包含`this`关键字，这个`this`指的是类，而不是实例。]() 

   ```js
   class Person {
       static getAge() {
           this.setAge();//此this指向Person，相当调用static setAge()等同Person.setAge()
       }
       static setAge() {
           console.log('static setAge方法')
       }
       setAge() {
           console.log('实例方法:setAge')
       }
   }
   Person.getAge();//static setAge方法
   //以下说明，静态和实例方法都可以被子类继承
   class Human extends Person {}
   let h = new Human();
   Human.setAge();//static setAge方法
   h.setAge();//实例方法:setAge
   ```

   静态方法也是可以从`super`对象上调用的。

   ```js
   class Foo {
     static classMethod() {
       return 'hello';
     }
   }
   class Bar extends Foo {
     static classMethod() {
       return super.classMethod() + ', too';
     }
   }
   Bar.classMethod() // "hello, too"
   ```

2. **静态属性**指的是 Class 本身的属性，而不是**实例属性**（即定义在实例对象（`this`）上的属性 ）

   ```js
   //目前ES6 明确规定，Class 内部只有静态方法，没有静态属性
   //静态属性和实例属性的写法只能如下：
   class Person {
       constructor() {
   		this.age = 20;//实例属性
   	}
       static getAge() {
           console.log(this.age);
       }
   }
   Person.age = 22;//静态属性
   let p = new Person();
   console.log(p.age);//20
   p.age = 30;//实例属性
   Person.getAge()//22
   ```

3. 类的实例属性和静态属性在ES6给出新的写法，目前不行

# class的继承

### 1、extends

1. Class 可以通过`extends`关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。 

   继承父类的所有方法和属性，在子类使用this之前必须使用super

   ```js
   class Person {
       constructor(x, y) {
           this.x = x;
           this.y = y;
       }
       static getName() {
           console.log('父类的静态方法')
       }
       getAge() {
           console.log('父类的实例方法')
       }
   }
   class Human extends Person {
       constructor(x, y, z) {
           this.z = z;//error
           super(x, y);//子类的constructor方法没有调用super之前，就使用this关键字，结果报错，而放在super方法之后就是正确的
           this.z = z;
       }
   }
   let h = new Human(12, 23, 34);
   Human.getName();//父类的静态方法
   h.getAge();//父类的实例方法
   console.log(h.x, h.y, h.z);//12 23 34
   ```

### 2.Object.getPrototypeOf()

`Object.getPrototypeOf`方法可以用来从子类上获取父类。 可以使用这个方法判断，一个类是否继承了另一个类。 

```js
Object.getPrototypeOf(ColorPoint) === Point// true
```

### 3、super关键字

`super`这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。 

##### 1、函数情况

`super()`作为函数调用时，代表父类的构造函数 

ES6 要求，子类的构造函数必须执行一次`super`函数。 否则 JavaScript 引擎会报错。 

作为函数时，`super()`只能用在子类的构造函数之中，用在其他地方就会报错。 

[注意，`super`虽然代表了父类`A`的构造函数，但是返回的是子类`B`的实例，即`super`内部的`this`指的是`B`，因此`super()`在这里相当于`A.prototype.constructor.call(this)`。]() 

```js
class A {
    console.log(new.target.name);
}
class B extends A {
  constructor() {
    super();
  }
}
new A() // A
new B() // B

class C extends A {
	m() {
    	super(); // 报错
  	}
}
```

##### 3、对象情况

`super`作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。 所以定义在父类实例上的方法或属性，是无法通过`super`调用的。 

1. 普通函数

   ```js
   class Person {
       constructor() {
           this.x = 21;
       }
       getX() {
           console.log('父类的实例方法');
       }
   }
   Person.prototype.getY = function () {
       console.log('父类的原型方法');
   }
   class Human extends Person {
       constructor() {
           super();
           super.getX(); //父类的实例方法
           console.log(super.x); //undefined
           super.getY(); //父类的原型方法
       }
   }
   let h = new Human();
   ```

2. 静态方法

   ```js
   class Parent {
       static myMethod(msg) {
           console.log('static', msg);
       }
       myMethod(msg) {
           console.log('instance', msg);
       }
   }
   class Child extends Parent {
       static myMethod(msg) {
           super.myMethod(msg);
       }
       myMethod(msg) {
           super.myMethod(msg);
       }
   }
   Child.myMethod(1); // static 1
   var child = new Child();
   child.myMethod(2); // instance 2
   ```

   在子类的静态方法中通过`super`调用父类的方法时，方法内部的`this`指向当前的子类，而不是子类的实例。 

   ```js
   class A {
       constructor() {
           this.x = 1;
       }
       static print() {
           console.log(this.x);
       }
   }
   class B extends A {
       constructor() {
           super();
           this.x = 2;
       }
       static m() {
           super.print();//此方法中的this指向类B的静态属性或方法，而不是类B的实例属性或方法
       }
   }
   B.x = 3;
   B.m() // 3
   ```

# Module

## 一、Module的语法

ES6的模块化的基本规则或特点：

- 每一个模块只加载一次， 每一个JS只执行一次， 如果下次再去加载同目录下同文件，直接从内存中读取。 一个模块就是一个单例，或者说就是一个对象；
- 每一个模块内声明的变量都是局部变量， 不会污染全局作用域；
- 模块内部的变量或者函数可以通过export导出；
- 一个模块可以导入别的模块
- es6模块默认使用严格模式，不管你有没有使用  'use strict'

### 1、export

1. `export`命令用于规定模块的对外接口 

2. 使用方式如下：

   ```js
   //方式一：定义时添加 export 关键字
   export let x = 1;
   export function add(x,y){
       return x + y;
   }
   export class Multiply{...}
   //方式二：对象导出(建议使用此方法（简单明了）)
   let x = 1;
   function add(x,y){
       return x + y;
   }
   class Multiply{...}
   export {x,add,Multiply}//直接输出要输出的对应变量，函数，类等
   export {//把要输出的起个别名来对外开放，外部使用时只能通过别名使用
   	x as xx,
       add as add1,
       Multiply as mt
   }
   ```

3. 错误使用情况如下：

   ```js
   export 1;//error
   
   let x = 1;
   export x;//error
   export {x}//true
   
   let f(){}
   export f;//error
   export {f}//true
   
   function foo(){
       export default 'def'
   }
   foo();//error
   ```

4. `export`语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。 

   ```js
   export var foo = 'bar';
   setTimeout(() => foo = 'baz', 500);
   //bar-->500ms-->baz
   ```

### 2、import

1. `import`命令用于输入其他模块提供的功能。 

   - 引入路径可以是相对或绝对路径

   - `import`只会加载一次

   - `import`命令具有提升效果，会提升到整个模块的头部，首先执行。 

   - `import` 命令输入的变量都是**只读** ，不可更改接口

   - 不能使用表达式和变量

     ```js
     import {'f'+'oo'} from ... //报错`  
     // 报错
     let module = 'my_module';
     import { foo } from module;
     
     //报错,属于语法错误：因为es6是编译时加载，而非运行进再加载，所以在执行语句前已经做了提升
     if (x === 1) {
       import { xx } from  './demo.js'
     } else {
       import { xxx } from  './demo.js'
     }
     ```

   - 模块内部变更，外面也会修改,即与模块内的值是动态绑定的

2. 指定加载方式如下：

   ```js
   //直接引入export输出的接口
   import {firstName, lastName, year} from './profile.js';
   //给引入的接口起个别名
   import { lastName as surname } from './profile.js';
   ```

3. 整体加载方式如下：

   ```js
   //加载所有接口并起个别名
   import * as circle from './circle';
   ```

### 3、export default

一个模块有且只有一个**export default** ,`export default`命令只能使用一次 

### 4、export和import的复合写法

### 5、import()函数

## 二、Module的加载实现