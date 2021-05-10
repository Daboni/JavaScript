// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are intances of Object
// object = {key : value};

// Literals and properties
const obj1 = {};                // 'object literal' syntax
const obj2 = new Object();      // 'object constructor' syntax

function print(person){
    console.log(person.name)
    console.log(person.age);
}

const ellie = {name:'ellie', age:4, 5:'five', four:4,tr:3,five:5};
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// Computed properties
// key should be always string

console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj,key){
    console.log(obj[key]);
}
printValue(ellie,'name');
printValue(ellie,5);
printValue(ellie,'5');
console.log(ellie[5]);

// Property value shorthand
const person1 = { name: 'bob', age:2 };
const porson2 = { name: 'steve', age:3};
const person3 = { name: 'dave', age:4};
const person4 = makePerson('ellie',30);
console.log(person4);
function makePerson(name,age){
    return{
        name,
        age,
    }
}
const person5 = new Person('ellie2',32);

// constructor function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    //return this;
}
console.log(person5);

// in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// for..in vs for..of
// for (key in obj)

console.clear();
for  (key in ellie){
    console.log(key);
}

// for (value of iterable)
const array = [1,2,4,5];
for (let i =0;i<array.length;i++){
    console.log(array[i]);
}

for(value of array){
    console.log(value);
}

// Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])

const user = {name:'ellie', age:'20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for(key in user){
    user3[key]= user[key];
}
console.clear();
console.log(user3)

const user4 = {};
Object.assign(user4, user);
console.log(user4);
const user5 = Object.assign({},user);
console.log(user5);

// another example
const fruit1 = { color:'red'};
const fruit2 = { color:'blue', size:'big'};
const mixed = Object.assign({},fruit1,fruit2);
console.log(mixed.color, mixed.size);