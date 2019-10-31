//Object 对象的相关方法

/**
 * 
 * 1. Object.getPrototypeOf()
 * 
**/
// 返回参数对象的原型。这是获取原型对象的标准方法。
var F = function() {}
var f = new F();
Object.getPrototypeOf(f) === F.prototype //true

Object.getPrototypeOf({}) === Object.prototype //true
Object.getPrototypeOf(Object.prototype) === null // true
Object.getPrototypeOf(F) === Function.prototype //true

/**
 * 
 * 2. Object.setPrototypeOf()
 * 
**/
// 为参数对象设置原型，返回该参数对象
var a = {};
var b = {x:1};

Object.setPrototypeOf(a, b);
Object.getPrototypeOf(a) === b //true
a.x // 1


/**
 * 
 * 3.Object.create(对象原型，属性描述对象)
 * 
**/
// 从一个实例对象生成另一个实例对象

//原型对象
var A = {
    print: function() {
        console.log('hello');
    }
}

//实例对象
var B = Object.create(A);
Object.getPrototypeOf(B) === A //true
B.print() //hello
B.print === A.print


//Object.create === 下面的方法
if(typeof Object.create !== 'function'){
    Object.create = function(obj) {
        function F(){}
        F.prototype = obj;
        return new F();
    }
}

//下面三种方式生成的新对象是等价的。
var obj1 = Object.create({})
var obj2 = Object.create()
var obj3 = new Object()

//使用Object.create方法的时候，必须提供对象原型，即参数不能为空，或者不是对象，否则会报错。
Object.create()
// TypeError: Object prototype may only be an Object or null
Object.create(123)
// TypeError: Object prototype may only be an Object or null

//Object.create方法生成的新对象，动态继承了原型。在原型上添加或修改任何方法，会立刻反映在新对象之上。
var obj1 = {p:1}
var obj2 = Object.create(obj1);

obj1.p = 2
obj2.p //2

// Object.create()的第二个参数
//Object.create方法还可以接受第二个参数。该参数是一个属性描述对象，它所描述的对象属性，会添加到实例对象，作为该对象自身的属性。

var obj = Object.create({},{
    p1: {
        value:123,
        enumerable: true,
        configurable: true,
        writable: true
    },
    p2: {
        value:'abc',
        enumerable: true,
        configurable: true,
        writable: true
    }
});
// 等同于 ===>
var obj = Object.create({});
obj.p1 = 123;
obj.p2 = 'abc';

//Object.create方法生成的对象，继承了它的原型对象的构造函数。
function A() {}
var a = new A();
var b = Object.create(a);

b.constructor === A // true
b instanceof A // true
// b对象的原型是a对象，因此继承了a对象的构造函数A。

/**
 * 
 * 4.Object.prototype.isPrototypeOf() 
 * 
 **/
//实例对象的isPrototypeOf方法，用来判断该对象是否为参数对象的原型。


 /**
  * 
  * 5.Object.prototype.__proto__
  * 
**/
//实例对象的__proto__属性（前后各两个下划线），返回该对象的原型。该属性可读写。
var obj = {}
var p = {}

obj.__proto__ = p;
Object.getPrototypeOf(obj) === p //true

//根据语言标准，__proto__属性只有浏览器才需要部署，其他环境可以没有这个属性。它前后的两根下划线，表明它本质是一个内部属性，不应该对使用者暴露。因此，应该尽量少用这个属性，而是用Object.getPrototypeOf()和Object.setPrototypeOf()，进行原型对象的读写操作。

/**
 * 
 * 6.获取原型对象方法的比较
 * 
 **/
//1.只有浏览器才需要部署
 obj.__proto__;
 //2.直接修改构造函数的原型 容易忘记需要重新指定构造函数 ==> C.prototype.constructor = C;
 obj.constructor.prototype;
 //3.(推荐)
 Object.getPrototypeOf(obj)

 /**
  * 
  * 7. Object.getOwnPropertyNames()
  * 
  **/
 // 返回一个数组，成员是参数对象本身的所有属性的键名，不包含继承的属性键名。

 //获取全部属性，不管属性是否可以遍历
 Object.getOwnPropertyNames(Date) 
 // ["length", "name", "prototype", "now", "parse", "UTC"]
 
 // 只获取可以遍历的对象属性
 Object.keys(Date)
 //[]

 /**
  * 
  *  8. Object.prototype.hasOwnProperty()
  * 
  **/
  //对象实例的hasOwnProperty方法返回一个布尔值，用于判断某个属性定义在对象自身，还是定义在原型链上。

Date.hasOwnProperty('length') // true
Date.hasOwnProperty('toString') // false

//另外，hasOwnProperty方法是 JavaScript 之中唯一一个处理对象属性时，不会遍历原型链的方法。

/**
 * 
 * 9.in 运算符和 for...in 循环 
 * 
 **/

 // [ in ] 运算符返回一个布尔值，表示一个对象是否具有某个属性。它不区分该属性是对象自身的属性，还是继承的属性。
'length' in Date //true
'toString' in Date // true

// [ for...in ] 循环, 获得对象的所有可遍历属性（不管是自身的还是继承的）
var o1 = { p1: 123 };
var o2 = Object.create(o1, {
    p2: {value: 'abc', enumerable: true}
});

for(p in o2) {
    console.info(p);
}

// p1
// p2

//为了在for...in循环中获得对象自身的属性，可以采用hasOwnProperty方法判断一下。

for(name in object) {
    if(object.hasOwnProperty(name)){
        /* loop code */
    }
}

//获得对象的所有属性（不管是自身的还是继承的，也不管是否可枚举），可以使用下面的函数。
function inhertedPropertyName(obj) {
    var props = {};
    while(obj){
        Object.getOwnPropertyNames(obj).forEach(function(p){
            props[p] = true;
        });
        obj = Object.Object.getPrototypeOf(obj);
    }
    return Object.getOwnPropertyNames(props)

}

inheritedPropertyNames(Date)
// [
//  "caller",
//  "constructor",
//  "toString",
//  "UTC",
//  ...
// ]

/**
 * 
 * 10.对象的拷贝
 * 
 * **/

 //1) 确保拷贝后的对象，与原对象具有同样的原型。
 //2) 确保拷贝后的对象，与原对象具有同样的实例属性。

 function copyObject(orig){
     var copy = Object.create(Object.getPrototypeOf(orig));
     copyOwnPropertiesFrom(copy, orig);
     return copy;
 }

 function copyOwnPropertiesFrom(target, source) {
    Object.getOwnPropertyNames(source).forEach(function(propKey){
        var desc = Object.getOwnPropertyDescriptor(source,propKey);
        Object.defineProperties(target, propKey, desc)
    });

    return target;
 }

 //简单写法 getOwnPropertyDescriptors es6引入的方法
 function copyObject(orig) {
    return Object.create(
      Object.getPrototypeOf(orig),
      Object.getOwnPropertyDescriptors(orig)
    );
  }