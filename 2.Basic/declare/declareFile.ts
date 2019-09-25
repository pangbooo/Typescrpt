//当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。

// declare var jQuery: (selector: string) =>  any;

//1.全局变量
/**
    declare var 声明全局变量
    declare function 声明全局方法
    declare class 声明全局类
    declare enum 声明全局枚举类型
    declare namespace 声明（含有子属性的）全局对象
    interface 和 type 声明全局类型
 */ 

 //2.npm
 //只有 function、class 和 interface 可以直接默认导出，其他的变量需要先定义出来，再默认

 //... TODO