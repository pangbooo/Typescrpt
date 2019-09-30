class Animal {
    constructor(name) {
        this.name = name
    }
    sayHi() {
        return `name is ${this.name}`
    }
}

let a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack

//ES5
// function Point(x,y){
//     this.x = x;
//     this.y = y;
// } 
// Point.prototype.toString = function() {
//     return this.x + ',' + this.y
// }
// var p = new PointerEvent(1,2);

//ES6
class Point {
    constructor(x, y){
        this.x = x;
        this.y = y
    }

    toString() {
        return this.x + ',' + this.y
    }
}

console.log(Point == Point.prototype.constructor)
console.log(Point.prototype)
console.log(Object.keys(Point.prototype))
console.log(Object.getOwnPropertyNames(Point.prototype))

var point = new Point(2,3);
console.log(point.hasOwnProperty('x'))
console.log(point.hasOwnProperty('y'))
console.log(point.hasOwnProperty('toString'))
console.log(point.__proto__.hasOwnProperty('toString'))

console.log(Object.getPrototypeOf(point) == Point.prototype)