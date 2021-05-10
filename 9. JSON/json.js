// JSON
// - simplest data interchange format
// - lightweight text-based structure
// - easy to read
// - key-value paires
// - used for serialization and transmission of data between the network the network connection
// - independent programming language and platform

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    //symbol: Symbol('id'),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit,["name"]);
console.log(json);

json = JSON.stringify(rabbit, (key,value) =>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});

console.log(json);

console.clear();
// 2. JSON to Object
// parse(json)

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key,value) => {
    console.log(`key: ${key},value: ${value}`);
    return key === 'birthDate' ? new Date(value): value;
});
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());