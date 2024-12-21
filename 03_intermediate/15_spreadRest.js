var returnedValue = Math.max(2, 5, 7, 4, 2, 9, 8);
console.log(returnedValue);

var myObj = {};

Object.assign(myObj, { a: 1, b: 4, c: 8 }, { y: 7, x: 9 });
console.log(myObj);

function sumOne(a, b) {
    return a + b;
}
var myA = [5, 4];
console.log(sumOne(...myA)); // spread operator

function sumTwo(a, b, ...args) {
    let sum = 0;
    let multi = a * b;
    for (const arg of args) {
        sum = sum + arg;
    }
    return [sum, multi];
}

console.log(sumTwo(2, 3, 1, 5, 7));

// rest operator capturing multiple elements in a array using the spread operator (...)