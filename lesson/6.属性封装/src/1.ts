(function(){
    class Person {
        private _name:string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        get name(){
            return this._name;
        }

        set name(value: string){
            this._name = value;
        }

        get age() {
            return this._age;
        }

        set age(value) {
            if(value >= 0) {
                this._age = value;
            }
        }
    }

    const person = new Person('p', 10);

    person.age = 20;
    console.log(person);
    console.log(person.name);

    class A {
        // constructor 这种方式传参， 相当于赋值 
        //this.name = name;this.age = age;
        constructor(public name: string, protected age: number, private gender: string) {
            
        }
    }

    const a = new A('a', 10, 'female');
    console.log(a);

    class B extends A {
        test() {
            console.log(this.name);
            console.log(this.age);
            // console.log(this.gender);
        }
    }

    const b = new B('b', 10, 'female');
    b.test();
})();