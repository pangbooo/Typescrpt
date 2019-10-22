//多重继承

// JavaScript 不提供多重继承功能，即不允许一个对象同时继承多个对象。
// 但是，可以通过变通方法，实现这个功能。

function M1() {
    this.hello = 'hello';
}

function M2 () {
    this.world = 'world';
}

function S() {
    M1.call(this);
    M2.call(this);
}

//继承M1
S.prototype = Object.create(M1.prototype);
//继承链上加入 M2
Object.assign(S.prototype,M2.prototype);

//指定构造函数
S.prototype.constructor = S;

var s = new S();
console.log( s.hello ) //hello
console.log( s.world ) // world

//上面代码中，子类S同时继承了父类M1和M2。
//这种模式又称为 [ Mixin ]（混入）。