// let命令只在所在的代码块内有效。
var a =[];
console.log('0')
for(let i = 0; i<10000000; i++){
    a[i] = function(){
        console.log(i)
    }
}
console.log('1')
a[6]();
console.log('2')
//输入： 0，wait，1，1000000，2

for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
    // 设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
}
// abc
// abc
// abc

// 不存在变量提升 
// 暂时性死区
