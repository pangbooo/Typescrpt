class Animal {
    private name;
    public constructor(name) {
      this.name = name;
    }
  }
  
  let a = new Animal('Jack');
  console.log(a.name); // Jack
  a.name = 'Tom'

  class Cat extends Animal{
    constructor(name){
        super(name);
        console.log(this.name)
    }
  }