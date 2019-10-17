// this 关键字

/**
 * 一、内涵 
 **/

// 不管什么场合，this总是返回一个对象
// 简单说，this就是属性或者方法 “当前” 所在的对象

//1.
var person = {
    name: 'zhangsan',
    describe: function() {
        return 'name is ' + this.name
    }
}

console.log(person.describe()); //zhangsan

//2.
var A = {
    name: 'zhangsan',
    describe: function() {
        return 'name is ' + this.name
    }
}

var B = {
    name: 'lisi'
}

B.describe = A.describe;
console.log(B.describe()); //lisi

//3.重构
function f() {
    return 'name is ' + this.name
}

var C = {
    name: 'C',
    describe: f
}

var D = {
    name: 'D',
    describe: f
}
console.log(C.describe());
console.log(D.describe());

//4.
var E = {
    name: 'E',
    describe: function() {
        return 'name is ' + this.name
    }
}

var name = 'Window';
var f = A.describe
console.log(f()); //w

//5.网页的例子
{/* <input type='text' name='age' onChange="validate(this,18,99)"> */}

function validate(obj, lowVal, highVal) {
    if(obj.val < lowVal || obj.val > highVal){
        console.log('Invalid Value!');
    }
}
//this就代表传入当前对象（即文本框）


/**
 *  
 * 二、实质 
 * Javascript之所以有this的设计，跟内存里面的数据结构有关系
 * 
 **/

 var obj = { foo: 5}

 // 赋值，取值过程
//1. javascript引擎现在内存里生成一个对象{foo:5}
//2. 将这个对象的内存地址赋值给变量obj（也就是说，变量obj是一个地址）
//3. 读取obj.foo, 引擎先从obj拿到内存地址，然后从该地址读出原始对象，返回foo属性

/**
 * 
 * 三、使用场合
 *  
 **/

//1.全局环境
//2.构造函数
//3.对象的方法 ~~~（如果this所在的方法不在对象的第一层，这时this只是指向当前一层的对象，而不会继承更上面的层。）


var a = {
    p: 'hello',
    b: {
        m: function() {
            console.log('p,',this.p)
        }
    }
}

console.log(a.b.m()) //undefined


/**
 *
 * 四.this使用注意点 
 * 
 **/

//1)避免多层 this
var counter = {
    count: 0
};

counter.inc = function () {
    console.log(this);  //window  
    this.count++
};

var f = counter.inc;
f();


/*
    var counter
    var tem; 
    var f


    counter = {
        count: 0
    }

    tem = function () {
        'use strict';
        this.count++
    };

    counter.inc = tem

    f = counter.inc;

    f()
*/

//2)避免数组处理方法中的 this
var o1 = {
    v: 'hello',
    p: [ 'a1', 'a2' ],
    f: function f() {
      var that = this;
      this.p.forEach(function (item) {
        console.log(this); //window
        console.log(that.v + ' ' + item); 
      });
    }
  }

var o2 = {
    v: 'hello',
    p: [ 'a1', 'a2' ],
    f: function f() {
      this.p.forEach(function (item) {
        console.log(this);
      }, this);
    }
  }

  o1.f();
  o2.f();


  //3)避免回调函数中的 this
  var o = new Object();
  o.f = function () {
    console.log(this === o);
  }

  o.f(); //true
  //$('#button').on('click', o.f); //false (this变为按钮Dom对象)


  /**
   * 
   * 5.绑定 this 的方法 （call、apply、bind）
   * 
   **/
  
  var counter = {
    count: 0,
    inc: function () {
      console.log(this)
      this.count++;
    }
  };

  var obj = {
      count: 10
  }
  
  var func = counter.inc.bind(obj);
  func();
  counter.count // 11

  // bind 结合 call
  [1,2,3].slice(0,1);
