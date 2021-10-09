(function(){
    function fn<T>(a: T): T {
        return a;
    }

    fn(1); // 不指定泛型，Ts可以根据类型自动推断
    fn<string>('abc') // 指定泛型

    // 泛型可以指定多个
    function fn2<T, K>(a: T, b: K): T {
        return a;
    }


    interface inter {
        length: number
    }

    // <T extends inter>表示泛型T必须是inter的实现类（子类）
    function fn3<T extends inter>(a: T):number {
        return a.length;
    }

    fn3({length:10})

    class myClass<T>{
        name: T
        constructor(name: T) {
            this.name = name;
        }
    }

    const a = new myClass<string>('a');
})();