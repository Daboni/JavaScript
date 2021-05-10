// Variable
// let

// global 변수는 어플리케이션이 실행되는 순간부터 끝날때까지 메모리에 탑지

'use strict'
let globalName = 'global name'
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var hoisting(move declaration from bottom to top)
// has no block scope
// var(X) let(O)

{
    age =4;
    var age;
}
console.log(age);

// constants(immutable data type always)
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// Variable types
// primitive, single itme; number,string,boolean,null,undefined,symbol
// object, box container
// function, first-class function


// number
const count = 17;
const size = 17.1;

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string

const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`)
const helloBob = `hi ${brendan}!`;    // template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`)

// boolean
// false : 0, null, undeffined, NaN, ''
// true : any other value

const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique indentifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

// object, real-life object, data structure
let ellie = {name : 'ellie', age: 20};
ellie.age = 21;