//2.函数的属性和方法
//（name（函数名）,length(定义时参数的个数),toString（自定义函数返回函数原码，原声函数返回"function sqrt() { [native code] }"））


//3.3函数本身的作用域
//它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关。

//Ex1：
var a = 1;
var x = function () {
  console.log(a);
};

function f() {
  var a = 2;
  x();
}

f() //1


//Ex2:
var x = function () {
    console.log(a);
};
  
function y(f) {
    var a = 2;
    f();
}

y(x) // a is not defined
// y内部f代表函数x，x的作用域是定义时的全局作用域，a未定义


//Ex3:
function foo() {
    var x = 1;
    function bar() {
        console.log(x);
    }
    return bar;
}
  
var x = 2;
var f = foo();
f() //1