// String concatenation
console.log('my' + ' cat');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// Numeric operators
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(5%2);
console.log(2**3);

//Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // counter = counter + 1; preIncrement = counter
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++; // postIncrement = count; count = count + 1
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// Comparison operation

// logical operators : ||, &&, !

// Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;

console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality = puzzler
console.log(0 == false); //t
console.log(0 === false); //f
console.log('' == false); //t
console.log('' === false);  //f
console.log(null == undefined); //t
console.log(null === undefined); //f

// Conditional operators: if
// if, else if, else
const name = 'ellie';
if(name === 'ellie'){
    console.log('welcone, Ellie!');
} else if(name === 'coder'){
    console.log('u r amazing coder');
} else{
    console.log('unknown');
}

// Ternary operator: ?
// conditions ? value1 : value2;
console.log(name === 'ellie'? 'yes' : 'no');

// Switch statement

const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break
    default:
        console.log('same all!');
        break
}

// Loop
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while(i>0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check th condition.
do{
    console.log(`do while: ${i}`);
    i--;
}while (i>0);

// for loop, for(begin;condition;step)
for(i = 3; i>0;i--){
    console.log(`for: ${i}`);
}
