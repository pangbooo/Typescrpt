class IncreasingCounter {
    constructor() {
      this._count = 0;
    }
    get value() {
      console.log('Getting the current value!');
      return this._count;
    }
    increment() {
      this._count++;
    }
  }

  class IncreasingCounter {
    _count = 0;

    constructor() {
    }
    get value() {
      console.log('Getting the current value!');
      return this._count;
    }
    increment() {
      this._count++;
    }
  }

  //4.静态属性(定义在类上的属性，区别实例的属性)
  //old
  class Foo{}
  Foo.prop = 1


  //(提案 )
  class Foo{
      static prop = 1;
  }

