class Animal{
    public name;
    public constructor(name){
        this.name = name
    }
}

let a = new Animal('Jack');
console.log(a.name);

a.name = 'Tom';
console.log(a.name)