//es5 -> class
/* function Point(a,b){
  this.x = a // 公开
  this.y = b
  let x = a*10 //私有
  let y = b*10
  this.print = function(){
    return '(' + this.x + ', ' + this.y + ')';
  }
}
var p = Point(11,22)
console.log(p.x,p.y);
console.log(p.print()); */

//es6  class -> 语法糖。
/* class Point{
  constructor(x,y){
    this.x = x
    this.y = y
  }
  print(val){
    return val
  }
  print(){
    return '(' + this.x + ', ' + this.y + ')';
  }
}
var p = new Point()
p.x = 11
p.y = 22
console.log(p.print('es6'));
 */

/* let cl = class Me{

  getClassName(){
    return Me.name
  }
}
let c = new cl()
console.log(c.getClassName()); */

/* class Person{
  constructor(name){
    this.name = name
  }
  sayName(){
    console.log(this.name);
  }
  static sayName(name){
    console.log(name);
  }
}
const p = new Person('李四')
p.sayName()
Person.sayName('tom')
console.log(Person.age); */


class Animal{
  constructor(name,age){
    this.age  = 5
    this.name = name || '动物'
  }
  speak(){
    console.log(this.name+" 叫");
  }
  static hello(){
    console.log('hello');
  }
}
class Dog extends Animal{
  constructor(color){
    super()
    this.color = color
  }
  speak(){
    console.log(this.name+" 汪汪汪汪", this.age);
  }
}
class Cat extends Animal{

}
/* var a = new Animal('tom')
a.speak()
Animal.hello() */
var dog = new Dog('旺财','黄色')
dog.speak()
Dog.hello()
var dog1 = new Dog('旺财1','灰色')
dog1.speak()
Dog.hello()
const cat = new Cat('tom')
cat.speak()
Cat.hello()