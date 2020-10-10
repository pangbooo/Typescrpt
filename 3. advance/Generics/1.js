//泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
/**
 *
 * 1)泛型的写法
 *
 * **/
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
//我们在函数名后添加了 <T>，其中 T 用来指代任意【输入的类型】，在后面的输入 value: T 和输出 Array<T> 中即可使用了。
createArray(3, 'x');
//or
//createArray(3,'x')
/**
 *
 * 2) 多个类型参数
 *
 **/
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([6, 'six']);
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
//多个类型参数之间，也可以进行约束
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var x = { a: 1, b: 2, c: 3, d: 4 };
console.log(copyFields(x, { b: 10, d: 20 }));
