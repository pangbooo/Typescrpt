/**
 * 
 * 一、简介
 * 
 **/

//1. 类的由来
// ES5
// function Point(x, y) {
//     this.x = x;
//     this.y = y;
//   }
  
//   Point.prototype.toString = function () {
//     return '(' + this.x + ', ' + this.y + ')';
//   };
  
//   var p = new Point(1, 2);

  //ES6
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  }

  console.log(typeof Point)
  console.log(Point === Point.prototype.constructor)

  //===> [区别]类的内部所有定义的方法，都是不可枚举的（non-enumerable）。
  console.log( Object.keys(Point) )

//2.constructor
//constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
//一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
class A{}

//==> 等价于
class A{
  constructor(){}
}

//constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象
class B{
  constructor(){
    return Object.create(null);
  }
}
new B() instanceof B //false

//3.取值函数（getter）和存值函数（setter）
//对某个属性，设置存取值
class Myclass{
  constructor(){

  }
  get prop(){
    return 'getter';
  }
  set prop(value) {
    console.log('setter:'+ value)
  }
}

let inst = new Myclass();

inst.prop = 123; //setter:123
inst.prop //getter 

//4.属性表达式
let methodName  = 'getArea';
class Square {
  constructor(length) {}

  [methodName]() {

  }
}


//5.class表达式
const Myclass = class Me {
  //类的名字是Me，但是Me只能在Class内部使用。
  //外部只能使用MyClass
  getClassName(){
    return Me.name
  }
}

let inst = new Myclass();
inst.getClassName(); //Me
Me.name //ReferenceError: Me is not defined

// ==> 省略class的name
const MyClass = class { }

// ==> 采用 Class 表达式，可以写出立即执行的 Class。
let person = new class {
  constructor(name){
    this.name = name
  }

  sayName(){
    console.log(this.name)
  }
}('pangbo')
//6. 注意点

// ==> 5)this 指向
// 类的方法内部如果有this， 默认指向实例。
class Logger {
  printName(name = 'there'){
      this.print(`Hello ${name}`);
  }

  print(text) {
      console.log(text);
  }
}
const logger = new Logger();
const { printName } = logger;
printName();
//如果将这个方法提取出来单独使用，this会指向该方法运行时所在的环境（由于 class 内部是严格模式，所以 this 实际指向的是undefined）

//1) 构造方法中绑定this
// constructor(){
    // this.printName = this.printName.bind(this)
// }

//2) 箭头函数
// 箭头函数内部的this总是指向定义时所在的对象

/**
 * 
 * 二、静态方法
 * 如果在方法前面加上static， 那么这个方法不会被实例继承，而是需要类来调用
 * 
 **/

 class Foo {
   static classMethod(){
     return 'hello'
   }
 }

 Foo.classMethod(); // hello
 var foo = new Foo();
 foo.classMethod() 
// TypeError: foo.classMethod is not a function


// ==> 如果静态方法包含this关键字， 这个this指的是类，而不是实例
class Foo {
  static bar(){
    this.baz()
  }
  static baz(){
    console.log('hello')
  }
  baz(){
    console.log('world')
  }
}
Foo.baz() // hello

// ==> 父类的静态方法，可以被子类继承
class Foo {
  static classMethod(){
    return 'hello'
  }
}

class Bar extends Foo {}
Bar.classMethod() //hello

// ==> 静态方法也可以从super对象调用
class Foo {
  static classMethod(){
    return 'hello'
  }
}

class Bar extends Foo {
  static classMethod(){
    // super作为对象时， 在静态方法中，指向父类
    return super.classMethod() + 'too'
  }
}

Bar.classMethod() // hello too

/**
 * 
 * 三、实例属性新写法
 * 
 * **/

class IncreasingCounter {
  constructor() {
    this._count = 0;
  }
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}

//新写法
class IncreasingCounter {
  //_count 和 value() increment() 处于同一层级，不需要加this
  _count = 0;

  get value() {
    console.log('Getting the current value!');
    return this._count;
  }

  increment() {
    this._count++;
  }
}


/**
 * 
 * 四、静态属性
 * 静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。
 * 
 **/

class Foo {
  static prop = 1;
}

/**
 * 
 * 五、私有方法和私有属性
 * 
 **/

/**
 * 
 * 六、new.target 属性 
 * ES6 为new命令引入了一个new.target属性，该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。
 * 
 **/

class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    this.length = length;
    this.width = width;
  }
}

let rectangle = new Rectangle(3,4) // true

//子类继承父类时，new.target会返回子类。
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
   //...
  }
}

class Square extends Rectangle {
  constructor(length, width){
    super(length, width)
  }
}

var obj = new Square(3); // false

// 应用： 利用这个特性可以写出不能独立使用的Class
class Shape {
  constructor(){
    if(new.target === 'Shape'){
      throw new Error('本类不能实例化')
    }
  }
}

class Rectangle extends Shape{
  constructor(length, width){
    super();
    //...
  }
}

var x = new Shape();  // 报错
var y = new Rectangle(3, 4);  // 正确