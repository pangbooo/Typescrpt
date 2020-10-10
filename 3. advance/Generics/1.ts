//泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

/**
 * 
 * 1)泛型的写法
 * 
 * **/ 
function createArray<T>(length: number, value: T):Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
//我们在函数名后添加了 <T>，其中 T 用来指代任意【输入的类型】，在后面的输入 value: T 和输出 Array<T> 中即可使用了。
createArray<string>(3, 'x');
//or
//createArray(3,'x')


/**
 * 
 * 2) 多个类型参数
 * 
 **/
function swap<T,U>(tuple: [T, U]): [U,T]{
    return [tuple[1], tuple[0]];
}
swap([6,'six'])


/*
 * 
 * 3)泛型约束
 * 
 * */ 
interface lengthwise {
    length: number
}

function loggingIdentity<T extends lengthwise>(arg: T) :T{
    console.log(arg.length);
    return arg
}

//多个类型参数之间，也可以进行约束
function copyFields<T extends U, U>(target: T, source: U): T {
    for( let id in source){
        target[id] = (<T>source)[id];
    }
    return target;
}
let x = { a: 1, b: 2, c: 3, d: 4 };
console.log(copyFields(x, { b: 10, d: 20 }))


/**
 * 
 * 4）泛型接口
 * 
 * **/

 interface SearchFunc {
     (source: string, subString: string): boolean
 }

 let mySearch: SearchFunc;
 mySearch = function(source: string, subString: string){
     return source.search(subString) !== -1
 }