//原型对象概述

/**
 * 
 * 1.构造函数的缺点
 *  同一个构造函数的多个实例之间，无法共享属性，从而造成对系统资源的浪费。
**/

function Cat (name, color) {
    this.name = name;
    this.color = color;
}
var cat1 = new Cat('大毛', '白色');
// Cat函数是一个构造函数，函数内部定义了name属性和color属性，所有实例对象（上例是cat1）都会生成这两个属性，即这两个属性会定义在实例对象上面。


/*========================================================================================================================================*/

/**
 *
 * 2.prototype 属性的作用
 *  
 **/

function f(){}
typeof f.prototype // object

// ==> 1)
//每个函数都有一个prototype属性，指向一个对象。
//对于构造函数来说，生成实例的时候，该属性会自动成为实例对象的原型。

// ==> 2)
//当实例对象本身没有某个属性或方法的时候，它会到原型对象去寻找该属性或方法。
//如果实例对象自身就有某个属性或方法，它就不会再去原型对象寻找这个属性或方法。


// ==> 3)
//实例对象可以视作从原型对象衍生出来的子对象。

/*========================================================================================================================================*/

/**
 * 
 * 3.原型链
 * 
 **/

// ==> 1) 由来
// JavaScript 规定，所有对象都有自己的原型对象（prototype）。
// 一方面，任何一个对象，都可以充当其他对象的原型
// 另一方面，由于原型对象也是对象，所以它也有自己的原型。
// 因此，就会形成一个“原型链”（prototype chain）

// == 2) 原型链的根源
// 对象的原型最终都可以上溯到 [ Object.prototype ], 即 Object构造函数的prototype属性
// 所有对象都继承了Object.prototype的属性
// Object.prototype的原型是 [ null ]
// null没有任何属性和方法，也没有自己的原型。因此，原型链的尽头就是null。

// => 3 读取实例对象属性
// JavaScript 引擎先寻找对象本身的属性，如果找不到，就到它的原型去找，如果还是找不到，就到原型的原型去找。如果直到最顶层的Object.prototype还是找不到，则返回undefined。
//  如果对象自身和它的原型，都定义了一个同名属性，那么优先读取对象自身的属性
var myArray = function(){}

myArray.prototype = new Array();
myArray.prototype.constructor  = myArray;

var mine = new myArray();
mine.push(1,2,3);
mine.length // 3

mine instanceof myArray // true

/*========================================================================================================================================*/

/**
 * 
 * constructor 属性
 * 
 **/

 // ==>  1) /prototype 对象有一个constructor属性，默认指向prototype对象所在的构造函数。
function P() {}
P.prototype.constructor === P; // true

// ==> 2)由于constructor属性定义在prototype对象上面，意味着可以被所有实例对象继承。
var p = new P();
p.constructor === P; // true
p.constructor === P.prototype.constructor; // true
p.hasOwnPrototype('constructor') // false


// ==> 3) 
// constructor 属性表示【 原型对象】与【 构造函数 】之间的关联关系
// 如果修改了原型对象，一般会同时修改constructor属性，防止引用的时候出错。

function Person(name) {
    this.name = name;
}

Person.prototype.constructor === Person; //true

Person.prototype = {
    method: function (){}
}

Person.prototype.constructor === Person; //false
Person.prototype.constructor === Object //true

// 修改原型对象的时候,没有一起修改construtor属性，导致这个属性不再指向 Person

//修改原型对象的3种方式
//bad
C.prototype = {
    method: function() {}
}

//fine
C.prototype = {
    constructor: C,
    method: function() {}
}

//good
C.prototype.method = function() {}

//从实例得到构造函数名称
function Foo() {}
var f = new Foo();
f.constructor.name //Foo