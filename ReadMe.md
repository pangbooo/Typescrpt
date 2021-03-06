# TypeScript 入门教程
https://ts.xcatliu.com/introduction/hello-typescript

## 简介
### 1.安装 TypeScript
``` 
npm install -g typescript
```
- 我们约定使用 TypeScript 编写的文件以 .ts 为后缀，用 TypeScript 编写 React 时，以 .tsx 为后缀

### 2.Hello TypeScript
- 运行.ts文件
```
tsc hello.ts
```
*TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。*

## 基础
### 1.原始数据类型
- 布尔值
- 数值
- 字符串
- 空值
- null
- undefined

#### 空值
> 在 TypeScript 中，可以用 void 表示没有任何返回值的函数：      
> 你只能将它赋值为 undefined 和 null：
```javascript
function alertName(): void {
    alert('My name is Tom');
}

let unusable: void = undefined;
```

#### null & undefined
> 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
```javascript
//不会报错
let num: number = undefined;

let u: undefined;
let num2: number = u;
```

>而 void 类型的变量不能赋值给 number 类型的变量：
```javascript
let u: void;
let num: number = u;

// Type 'void' is not assignable to type 'number'.
```

### 任意值 (Any)
> - 如果是一个普通类型，在赋值过程中改变类型是不被允许的,*但如果是 any 类型，则允许被赋值为任意类型。*
> - *声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。*
> - 变量如果在声明的时候(__声明了变量，却未赋值__)，未指定其类型，那么它会被识别为任意值类型,而完全不被类型检查：
```javascript
let somethig;
//等价于：
//let something: any;
somethig = 'seven'
somethig = 7;
something.setName('Tom');
```
### 类型推论
> 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
```javascript
let myFavoriteNumber = 'seven';
//等价于：
//let myFavoriteNumber: string = 'seven';
```
### 联合类型
> 联合类型（Union Types）表示取值可以为多种类型中的一种。
当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们 __只能访问此联合类型的所有类型里共有的属性或方法__
```javascript
function getLength(something: string | number): number{
    return something.length
}

// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.

function getLength(something: string | number): string{
    return something.toString()
}
```

### 对象的类型——接口
> 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。
__赋值的时候，变量的形状必须和接口的形状保持一致。__
```javascript
interface Person {
    name: string,
    age?: age, //可选属性
    [propName: string]: any //任意属性
    readonly id: number //只读属性 （第一次给对象赋值之后，不可重新赋值）
}

let tom: Person = {
    name: 'tom',
    gender: 'male
}
```
__如果定义了任意属性，那么可选属性的值必须属于可选属性的子集__

### 数组的类型
> 在 TypeScript 中，数组类型有多种定义方式，比较灵活。
- 1. 「类型 + 方括号」
```javascript
let fibonacci: number[] = [1,2] //ok
let fibonacci: number[] = [1,2,'3'] // Type 'string' is not assignable to type 'number'.
```

- 2. 数组泛型
```javascript
let fibonacci: Array<number> = [1,2]
```

- 3. 类数组
```javascript
interface NumberArray {
    [index: number]: number
}
let fibonacci: NumberArray = [1,2];
```
不常用。不过有一种情况例外，那就是它常用来表示类数组。
```javascript
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;

    //arguments 就算一个类数组， 不可以直接用 number[]表示
}

//or 
function sum(){
    let args: IArguments = arguments
    //IArguments 是 ts内置对象
}
```


### 函数的类型
https://github.com/pangbooo/Typescrpt/blob/master/2.Basic/function.ts

### 类型断言
> 类型断言（Type Assertion）可以用来手动指定一个值的类型。
https://github.com/pangbooo/Typescrpt/blob/master/2.Basic/assert.ts

### 声明文件
### 内置对象

## 进阶
### 类型别名
```javascript
type Name = string;
type NameResolver = () => string;
type NameorResolver = Name | NameResolver;

function getName(n: NameorResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
```