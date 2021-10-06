class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        console.log('animal is barking');
    }
}

class Dog extends Animal {
    run() {
        console.log('dog is running')
    }

    sayHello() {
        console.log('wangwangwang')
    }
}

class Cat extends Animal {
    age: number
    constructor(name: string, age: number){
        super(name);
        this.age = age;
    }
}

const dog = new Dog('p');
dog.run();
dog.sayHello();

const cat = new Cat('pp', 12);
cat.sayHello();
console.log(cat.age);