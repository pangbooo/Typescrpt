(function(){
    type myType = {
        name: string,
        age: number
    }

    interface MyInterface{
        name: string,
        age: number,

        sayHello(): void
    }

    const a: myType = {
        name: 'a',
        age: 12
    }

    class Animal implements MyInterface {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        sayHello(): void {
            console.log('hello')
        }
    }
})();