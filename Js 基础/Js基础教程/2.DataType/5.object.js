/**
 * 1.概述
 * 
 **/

// ==> 1.2 键名
//对象的所有键名都是字符串（ES6 又引入了 Symbol 值也可以作为键名），所以加不加引号都可以。
// 如果键名是数值，会被自动转为字符串。

// ==> 1.3 对象的【引用】
//如果不同的变量名指向同一个对象，那么它们都是这个对象的引用
//也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量。
var o1 = {};
var o2 = {};

o1.a = 1;
o2.a //1

o2.b = 2;
o1.b //2

//如果取消某一个变量对于原对象的引用，不会影响到另一个变量
var o1 = {};
var o2 = {};

o1 = 1;
o2 //{}

//对于两个变量指向同一个原始数据类型，变量这时候的值是拷贝，互不影响

// ==> 1.4 表达式还是语句
//对象用大括号表示，这导致了一个问题：
//如果行首是一个大括号，他是表达式还是语句

{ foo : 123 }
//含义1：表达式，包含foo属性的对象
//含义2：语句，  代码区块 里面有标签foo,指向表达式123

//javascript引擎 一律解释为代码块

({foo:123}) //外层加上() 确保是表达式

eval( '{foo: 123}' ) // 123 代码块
eval( '( {foo: 123} )' ) // {foo: 123} 对象


/**
 * 
 * 2.属性的操作
 * 
 **/

 // ==> 2.1属性的【 读取 】
 //点运算符
 //方括号
        //(键值必须放在引号里面，否则会被当作变量处理),但是 数字键可以不加引号，因为会自动转成字符串。
        //方括号运算符内部还可以使用表达式。obj['hello'+'world']
        
 //Ex1:
 var obj = {
     p : 'hello'
 }
 obj.p   //hello
 obj['p']//hello

 //Ex2: 键值必须放在引号里面，否则会被当作变量处理
 var foo = 'bar';
 var obj = {
     foo: 1,
     bar: 2
 };

 obj.foo  //1
 obj[foo] // 2

 //Ex3:数字键可以不加引号，因为会自动转成字符串。
 var obj = {
    0.7: 'Hello World',
    1: 'a'
  };

obj['0.7']
obj[0.7]

//Ex4: 数值键名不能使用点运算符（因为会被当成小数点），只能使用方括号运算符。
// obj.1  //报错
obj[1] //a

// ==> 2.2 属性的赋值
// 点运算符和方括号运算符，不仅可以用来读取值，还可以用来赋值。

// ==> 2.3 属性的查看
// 查看一个对象本身的所有属性，可以使用Object.keys方法。
var obj = {
    key1: 1,
    key2: 2
  };
  
Object.keys(obj) //['key1','key2']

// ==> 2.4 属性的删除：delete命令
//   delete命令用于删除对象的属性，删除成功后返回true。

//Ex1:
var obj = {p:1}

Object.keys(obj) //['p']
delete obj.p //true

//再一次删除obj已经不存在的属性p 仍然返回true 
delete obj.p //true

//只有一种情况 delete会返回false，那就是该属性存在，且不得删除。
var obj = {};
Object.defineProperty(obj, "key", {
    configurable: false,
    value: "static"
});
delete obj.key //false

//Ex2：delete命令只能删除对象本身的属性，无法删除继承的属性
var obj = {};
delete obj.toString // true
obj.toString // function toString() { [native code] }

//  ==> 2.5 属性是否存在： 【in】运算符
//in运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值）

var obj = { p: 1 };
'p' in obj // true
'toString' in obj // true

// in 运算符不能分辨 自身属性 or 继承的属性
// 需要借助Object.hasOwnProperty() 判断
var obj = {}
if('toString' in obj) {
    console.log(obj.hasOwnProperty('toString')) // false
}

// ==> 2.6属性的遍历 for ... in
//1)  他遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性
//2)  他不仅遍历对象自身的属性，还遍历继承的属性

//Ex1；
var obj = {a:1,b:2,c:3}
for(var i in obj) {
    console.log('键名', i);
    console.log('键值', obj[i])
}
// 键名： a
// 键值： 1
// 键名： b
// 键值： 2
// 键名： c
// 键值： 3

//Ex2：
var obj = {};

// toString 属性是存在的
obj.toString // toString() { [native code] }

for (var p in obj) {
  console.log(p);
} // 没有任何输出, toString 它默认是“不可遍历







