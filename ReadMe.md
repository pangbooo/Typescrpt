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
### 原始数据类型
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
> 如果是一个普通类型，在赋值过程中改变类型是不被允许的：    
> 但如果是 any 类型，则允许被赋值为任意类型。

