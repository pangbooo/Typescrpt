//1. <Type>value
//2. value as Type 
//在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用后一种。
    

function getLength(something: string | number): number {
    if((<string>something).length){
        return (<string>something).length
    }else {
        something.toString().length;
    }
}

//类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的：
function toBoolean(something: string | number): boolean {
    return <boolean>something;
}