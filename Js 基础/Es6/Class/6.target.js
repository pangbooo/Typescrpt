class Rectangle {
    constructor(length, width){
        console.log('Rectangle...', new.target === Rectangle);
        this.length = length;
        this.width = width;
    }
}

class Square extends Rectangle {
    constructor(length){
        console.log('Square...', new.target === Square)
        super(length); // super 用法1 ==> 代表父类constructor执行
    }
}

var rectangle = new Rectangle(3,4); //true
var square = new Square(1); //false

//////////////////////////////////////////////////////////////////////////////
class Shape {
    constructor(){
        if(new.target === Shape) {
            throw Error('本类不能实例化')
        }
    }
}

class X extends Shape{
    constructor(){
        super();
    }
}

var shape = new Shape()// 报错
var x = new X() // ok