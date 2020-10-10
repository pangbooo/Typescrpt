//1.函数声明
function sum(x: number, y: number): number{
    return x + y;
}

//输入多余或者少于的参数，是不允许的。

//2.函数表达式
// right case:
let mySum: (x: number, y: number) => number = function(x: number, y:number) {
    return x + y;
}
// => 是Typescript中表示函数定义的， 和ES6中的箭头函数不同。

// error case：
let mySum2 = function(x: number, y: number): number {
    return x + y;
}
//这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。
//如果需要我们手动给 mySum2 添加类型，则应该按照right case

//3. 接口定义函数的形状
interface Seachrfunc {
    (source: string, subString: string): boolean
}

let mySearch: Seachrfunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

//4. 可选参数
//可选参数后面不允许再出现必需参数了

//5.重载
//重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}