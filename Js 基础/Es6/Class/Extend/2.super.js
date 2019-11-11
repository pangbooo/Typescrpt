//1.super作为函数调用时，代表父类的构造函数 （不定义报错）
class A {}

class B extends A {
  constructor() {
    super();
  }
}

//等于
class B extends A{}


//2.super作为对象时，在普通方法中，指向父类的原型对象(父类实例的属性和方法不能调用)；在静态方法中，指向父类。 

class A{
    constructor(){
        this.a = 1;
    }
    p(){
        return 2
    }
}

class B extends A {
    constructor(){
        super();
        console.log(super.p()) //2
    }

    get a(){
        return super.a
    }
}

let b = new B()
// super.p() === A.prototype.p() // true

b.a //undefined
// 因为a属性定义在父类A实例上，不再原型上


//ES6 规定，在子类普通方法中通过super调用父类的方法时，方法内部的【this指向】当前的子类实例。 
class A {
    constructor(){
        this.x = 1;
    }
    print(){
        console.log(this.x)
    }
}

class B extends A{
    constructor(){
        super();
        this.x = 2;
    }

    m(){
        super.print();
        // === super.print.call(this)
    }
}

let b = new B();
b.m(); //2 

//由于this指向子类实例，所以如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性。
class A{
    constructor(){
        this.x = 1
    }
}

class B extends A{
    constructor(){
        super();
        this.x = 2;
        super.x = 3;
        console.log(super.x); // === A.prototype.x => undefined
        console.log(this.x) //3
    }
}

//super作为对象，用在【静态方法】之这时super将指向父类，而不是父类的原型对象。
class Parent {
    static myMethod(msg) {
      console.log('static', msg);
    }
  
    myMethod(msg) {
      console.log('instance', msg);
    }
  }
  
  class Child extends Parent {
    static myMethod(msg) {
      super.myMethod(msg);
    }
  
    myMethod(msg) {
      super.myMethod(msg);
    }
  }
  
  Child.myMethod(1); // static 1
  
  var child = new Child();
  child.myMethod(2); // instance 2  
