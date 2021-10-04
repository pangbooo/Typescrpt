let a: number;
a = 10;
// a = 'a'; 报错

// any
let b;
a = b;

// unknow 
let c: unknown;
// a = b; //Type 'unknown' is not assignable to type 'number'.
if(typeof c === 'number') {
    a = c;
}

a = c as number;
a = <number> c;

//void
function fn(): void {

}

//never
function fn2(): never {
 throw new Error();
}

//object
let d:Object;
d = {}
d = function(){}

let e:{name: string, age?:number}
// e = {} //Property 'name' is missing in type '{}' but required in type '{ name: string; }'.
e = {name: 'e'};

let f: (a: number, b:number) => number;
f = function(n1: number, n2: number): number {
    return n1 + n2;
}

//array
let g: string[];
g = ['1', '2'];

let k: number[];
let l: Array<number>;
l = [1, 2, 3];

//tuple
let m: [string, string];
m = ['a', 'b',];

//enum
enum Gender{
    Male,
    Female,
}
let n: {name: string, gender: Gender};
n = {
    name: 'p',
    gender: Gender.Male,
}