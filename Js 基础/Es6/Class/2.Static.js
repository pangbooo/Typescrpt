//静态方法 static
// 不被实例继承，而是直接通过类来调用
class Foo {
    static classMethod() {
        return 'hello';
    }
}

Foo.classMethod();
var foo = new Foo();
// foo.classMethod();
//:11 Uncaught TypeError: foo.classMethod is not a function


class Foo1{
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

Foo1.bar() //hello
//如果静态方法包含this关键字，这个this指的是类，而不是实例。
//从这个例子还可以看出，静态方法可以与非静态方法重名。

//父类的静态方法，可以被子类继承。
class Foo2{
    static classMethod() {
        return 'hello';
    }
}
class Bar extends Foo2{}

Bar.classMethod();//hello

//静态方法也是可以从super对象上调用的。 ??