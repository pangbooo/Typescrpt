class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    say() {
        console.log(this.name);
    }
}

const person1 = new Person('pangbo', 18);
const person2 = new Person('qq', 12);

console.log(person1);
console.log(person2);
person1.say();