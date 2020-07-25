abstract class Animal {
    public name;
    public constructor(name){
        this.name = name;
    }
    public abstract sayHi()
}

class Cat extends Animal{
    public eat(){
        console.log(`${this.name} is eating.`);
    }
    public sayHi(){
        console.log(`Meow, My name is ${this.name}`);
    }
}

let cat = new Cat('Tom');
cat.eat();
cat.sayHi();
