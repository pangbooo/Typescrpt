class Point{
    static hello(){
        return 'hello'
    }
}

class ColorPoint extends Point{
    constructor(x,y,color) {
        super(x,y); //调用父类constructor(x,y),新建父类的this对象。
        this.color = color
    }

    toString(){
        return this.color + super.toString(); // 调用父类的toString()
    }
}

/**
 * 
 * 1.原理
 * 
 * 子类必须在constructor方法中调用super方法，否则新建实例时会报错
 * ES5 ==> 实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
 * ES6 ==> 先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。
 * 
 **/

/**
 * 
 * 2.constructor方法会被默认添加
 * 
 **/
class ColorPoint extends Point {
}

// 等同于
class ColorPoint extends Point {
  constructor(...args) {
    super(...args);
  }
}

// ==> 3.静态方法也会被继承
var col = new ColorPoint(1,2,'red');
col.hello() //hello
