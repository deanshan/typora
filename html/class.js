 // function Person() {
    //     this.age = 20;
    //     this.toString = function () {}
    // }
    // Person.prototype.getAge = function () {
    //     console.log(this.age);
    // }

    // var p = new Person();
    // Object.defineProperty(p, 'sex', {
    //     value: 'male',
    //     enumerable: true //是否可枚举,默认为false
    // });
    // for (var key in p) {
    //     console.log('for in:' + key); //自身+原型+通过Object.defineProperty()添加的可枚举
    // }

    // console.log('Object.keys:' + Object.keys(p)); //自身的+通过Object.defineProperty()添加的可枚举

    // console.log('JSON.stringify:' + JSON.stringify(p)); //自身的+通过Object.defineProperty()添加的可枚举
// class Person {
    //     constructor() {
    //         this.age = 20;
    //     }
    //     toString() {
    //         console.log('自身的')
    //     }
    //     valueOf() {

    //     }

    //     getAge() {
    //         console.log(this.age);
    //     }
    // }
    // Person.prototype.setAge = function () {
    //     console.log(this.age);
    // }
    // Object.assign(Person.prototype, {
    //     a() {},
    //     b() {}
    // })
    // var p = new Person();
    // Object.defineProperty(p, 'sex', {
    //     value: 'male',
    //     enumerable: true //是否可枚举,默认为false
    // });
    // console.log(Person.prototype);
    // for (var key in p) {
    //     console.log('for in:' + key); //toString\valueOf是类内部定义的方法，是不可枚举的
    // }

    // console.log('Object.keys:' + Object.keys(p)); //toString\valueOf是类内部定义的方法，是不可枚举的

    // console.log('JSON.stringify:' + JSON.stringify(p)); //自身的+通过Object.defineProperty()添加的可枚举
 // const MyPerson = class Person {
    //     getName() {
    //         return Person.name;
    //     }
    // }
    // let p = new MyPerson();
    // console.log(p.getName());
    // console.log(Person.getName());
    // let person = new class {
    //     constructor(name) {
    //         this.name = name;
    //     }
    //     sayName() {
    //         console.log(this.name)
    //     }
    // }('lisi');
    // console.log(person.sayName());

    // class Person {
    //     constructor(name) {
    //         this.age = name;
    //         this.name = name;
    //         // this.getName = this.getName.bind(this);
    //         // this.getName = () => {
    //         //     console.log(this.name);
    //         // }
    //     }
    //     // getName() {
    //     //     console.log(this.name);
    //     // }
    // }
    // const p = new Person('lisi');
    // const {
    //     getName
    // } = p;
    // getName();
    // console.log(Person.prototype)


    // class Person {
    //     constructor() {}
    //     set age(value) {
    //         if (value < 0 || value > 120) {
    //             throw new Error("invalid value")
    //         } else {
    //             this._age = value;
    //         }
    //     }
    //     get age() {
    //         return this._age
    //     }
    // }
    // let p = new Person();
    // p.age = 22;
    // console.log(p.age);
    // class Person {
    //     static getName() {
    //         console.log('lisi');
    //     }

    // }
    // let p = new Person();
    // Person.getName();
    // p.getName();


    // class Person {
    //     static getAge() {
    //         this.setAge();
    //     }
    //     static setAge() {
    //         console.log('static setAge')
    //     }
    //     setAge() {
    //         console.log('实例:setAge')
    //     }
    // }
    // Person.getAge();
    // class Human extends Person {}
    // let h = new Human();
    // h.setAge();
    // Human.setAge();

    //     class Person {
    //         constructor() {
    //             this.age = 20;
    //         }

    //         static getAge() {
    //             console.log(this.age);
    //         }
    //     }
    //     Person.age = 22;
    //     let p = new Person();
    //     p.age = 30;
    //     console.log(p.age);
    //     Person.getAge()

    // class Person {
    //     constructor(x, y) {
    //         this.x = x;
    //         this.y = y;
    //     }
    //     static getName() {
    //         console.log('父类的静态方法')
    //     }
    //     getAge() {
    //         console.log('父类的实例方法')
    //     }
    // }
    // class Human extends Person {
    //     constructor(x, y, z) {
    //         super(x, y);
    //         this.z = z;
    //     }
    //     getAge() {
    //         console.log(this.z);
    //     }
    // }
    // let h = new Human(12, 23, 34);
    // Human.getName();
    // h.getAge();
    // console.log(h.x, h.y, h.z);

    // class Person {
    //     constructor() {
    //         this.x = 21;
    //         this.y = 12;
    //     }
    //     getX() {
    //         console.log('父类的实例方法');
    //     }
    // }
    // Person.prototype.getY = function () {
    //     console.log('父类的原型方法');
    // }
    // class Human extends Person {
    //     constructor() {
    //         super();
    //         super.getX(); //父类的实例方法
    //         console.log(super.x); //undefined
    //         super.getY(); //父类的原型方法
    //     }
    // }
    // let h = new Human();


    // class Parent {
    //     static myMethod(msg) {
    //         console.log('static', msg);
    //     }
    //     myMethod(msg) {
    //         console.log('instance', msg);
    //     }
    // }
    // class Child extends Parent {
    //     static myMethod(msg) {
    //         super.myMethod(msg);
    //     }
    //     myMethod(msg) {
    //         super.myMethod(msg);
    //     }
    // }

    // Child.myMethod(1); // static 1

    // var child = new Child();
    // child.myMethod(2); // instance 2

    // class A {
    //     constructor() {
    //         this.x = 1;
    //     }
    //     static print() {
    //         console.log(this.x);
    //     }
    // }
    // class B extends A {
    //     constructor() {
    //         super();
    //         this.x = 2;
    //     }
    //     static m() {
    //         super.print();
    //     }
    // }

    // B.x = 3;
    // B.m() // 3

    // class Person {
    //     constructor() {
    //         this.x = 111;
    //     }
    //     static getName() {}
    //     getAge() {}
    // }
    // class Human extends Person {

    // }
    // console.log(Human.__proto__)
