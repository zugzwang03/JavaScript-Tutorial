const person = {
    name: "Shreya"
};

function printName(greeting, greeting2) {
    console.log(`${greeting} ${greeting2} ${this.name}`);
}
// binding
printName('Hello'); // undefined

printName.apply(person, ['Hello', 'sis']);

