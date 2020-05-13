//1. value as Type 
//2. <Type>value
//在 tsx 语法（React 的 jsx 语法的 ts 版）中必须(1)

interface Cat {
    name: string;
    run(): void;
}

interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish){
    if(typeof (animal as Fish).swim === 'function'){
        return true
    }
    return false;
}