//构造函数的继承

// 第一步 ==> 在子类的构造函数中， 调用父类构造函数
function Sub(value) {
    super.call(this);
    this.prop = value;
}
// Sub是子类的构造函数， this是子类的实例。
// 在实例上调用父类的构造函数，然后子类实例具有父类实例的属性

// 第二步 ==> 让子类的原型指向父类的原型，这样子类就可以继承父类原型。
Sub.prototype = Object.create(Super.prototype);
Sub.prototype.constructor = Sub;
Sub.prototype.method = function(){};

function Shape() {
    this.x = 0;
    this.y = 0;
}
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.log('Shape moved.');
}

//Ex: 让 Rectangle构造函数 继承Shape
//第一步，子类继承父类实例
function Rectangle(){
    Shape.call(this); // 调用父类构造函数
}
//另一中写法
function Rectangle(){
    this.base = Shape();
    this.base();
}

//第二步, 子类继承父类的原型
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;


var rect = new Rectangle();
rect instanceof Rectangle // true
rect instanceof Shape // true


/**
*
* 继承父类某个单独方法
* 
**/

classB.prototype.print = function() {
    ClassA.prototype.print.call(this);
}