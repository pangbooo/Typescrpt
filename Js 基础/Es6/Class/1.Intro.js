//1.
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
//constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
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

//4.取值函数（getter）和存值函数（setter）
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

//5.this 指向
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
