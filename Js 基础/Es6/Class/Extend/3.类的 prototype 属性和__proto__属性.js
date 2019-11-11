//Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。
class A{}
class B extends A{}

console.log(B.__proto__ === A)
console.log(B.__proto__.prototype === A.prototype)