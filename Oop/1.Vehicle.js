//1.实例对象与new命令

/**
 * 构造函数的特点有两个。
 * 1) 函数体内部使用了【this】关键字， 代表了所要生成的对象实例
 * 2）生成对象的时候， 必须使用【new】命令
 * 
 **/

var Vehicle = function(p) {
    'use strict';
    /**
     * 
     * 使用严格模式 强制使用 new 添加一个新对象
     * 因为 strict 模式下 this 不指向全局window对象， 会报错
     * var v = Vehicle(100)
     * Uncaught TypeError: Cannot set property 'price' of undefined
     * 
     **/
    
    this.price = p;
}
var v = new Vehicle(500);

//2.构造函数内部判断是否使用new
function Fubar(foo, bar) {
    if(!(this instanceof Fubar)) {
        return new Fubar(foo, bar);
    }

    this._foo = foo;
    this._bar = bar;
}
console.log(Fubar(1, 2)._foo == (new Fubar(1,2)._foo))

/**
 * 
 * new命令步骤 
 * 1）创建一个【空对象】，作为将要返回的对象实例
 * 2）将这个空对象的【原型】， 指向构造函数的proptotype属性
 * 3）将这个空对象赋值给函数内部的【this】关键字
 * 4）开始【执行构造函数】内部的代码
 * 
 **/

var testReturn = function() {
    this.price = 1000;
    return 1000;
}
(new testReturn() == 1000) //false
 /**
  * 注意！
  * 1）构造函数内部return 跟着一个对象 => new 命名返回 return 语句制定的对象
  *   ........... return 其他类型 => .........返回 this 对象
  * **/


  /**
   * 【 new.target 】
   * 函数内部可以使用new.target
   * 如果当前函数是new命令调用， new.target指向当前函数
   * 否则为undefined
   * 
   **/
  function f() {
      console.log(new.target === f)
  }
  f() //false
  new f() //true

  // 用来判断函数调用 是否用new
  function f(){
      if(!new.target) {
          throw new Error('请使用 new 命令调用！');
      }
  }
  f() // Uncaught Error: 请使用 new 命令调用！

  /**
   * 4.Object.create()创建实例对象
   * 根据现有对象作为模版， 生成新的实例对象 
   * 
   **/
  var person1 = {
    name: '张三',
    age: 38,
    greeting: function() {
      console.log('Hi! I\'m ' + this.name + '.');
    }
  };

  var person2 = Object.create(person1);

  person2.name //张三
  person2.greeting() // Hi! I'm 张三..

  //上面代码中，对象person1是person2的模板，后者继承了前者的属性和方法。



