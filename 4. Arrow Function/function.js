// Function

// function declaration
// function name(param1,param2){body ... return;}
// one function === one thing
// nameing : doSometing, command, verb
// e.g. createCaredAndPoint -> createCard, createPoint
// function is object in JS

function printHello(){
    console.log('Hello')
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

// Parameters
// primitive parameters : passed by value
// object parameters : passed by referece

function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name:'ellie'};
changeName(ellie);
console.log(ellie);

// Default parameters (added in ES6)
function showMessage(message, from='ellie'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// Rest parameter (added in ES6)
function printAll(...args){
    /*
    for(let i = 0;i<args.length;i++){
        console.log(args[i]);
    }
    */
   for(const arg of args){
       console.log(arg);
   }
   args.forEach((arg) => console.log(arg));
}
printAll('dream','coiding','ellie');

// Local scope
let globalMessage ='global'; // global variable
function printMessage(){
    let message = 'hello'; // local variable
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let chileMessage = 'hello';
    }
}
printMessage();

// Return a value
function sum(a,b){
    return a+b;
}
const result = sum(1,2);
console.log(`sum:${sum(1,2)}`);

// Early return, early exit
// bad
function upgradeUser(user){
    if (user.plint>10){
        // long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if (user.plint<=10){
        return;
    }
}

// First-class function

// Function expression
const print = function() {  // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// Callback function using function expression

function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
const printYes = function(){
    console.log('yes');
}

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('No');
}
randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);

// Arrow function
// always anonymous
const simplePrint = function (){
    console.log('simplePrint!');
};

const simplePrint2 = () => console.log('simplePrint');
const add = (a,b) => a+b;

simplePrint();
simplePrint2();

// IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();