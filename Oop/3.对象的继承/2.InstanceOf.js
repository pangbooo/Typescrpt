// instanceof运算符返回一个布尔值，表示对象是否为某个构造函数的实例。
//instanceof 它会检查右边构建函数的原型对象（prototype），是否在左边对象的原型链上。

var v = new Vehicle();
v instanceof Vehicle //true
 // 等同于
 Vehicle.prototype.isPrototypeOf(v)

var d = new Date();
d instanceof Data // true
d instanceof Object // true

//由于任意对象（除了null）都是Object的实例
//所以instanceof运算符可以判断一个值是否为非null的对象。
var obj = { foo: 123 }; 
obj instanceof Object // true
null instanceof Object // false

// instanceof 一个用处， 判断值的类型
var x = [1, 2, 3]; 
var y = {}; 
x instanceof Array // true
y instanceof Object // true


//注意，instanceof运算符只能用于对象，不适用原始类型的值
var s = 'hello';
s instanceof String // false

//此外，对于undefined和null，instanceof运算符总是返回false。
undefined instanceof Object // false
null instanceof Object // false