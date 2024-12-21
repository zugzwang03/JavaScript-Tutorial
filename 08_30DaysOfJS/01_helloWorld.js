
const createHelloWorld = function () {
    return function () {
        return 'Hello World';
    }
}

const f = createHelloWorld();
console.log(f());

// iife
const func = function () {
    return function (...args) {
        return "Hello World in iffe";
    }();
}

console.log(func());

// function hoisting
console.log(add(5, 3));

function add(a, b) {
    return a + b;
}
// anonymous functions do not support hoisting
// add1(5, 3);

const add1 = (a, b) => {
    return a + b;
}

// scoping
const c = 10;

function add2(a, b) {
    return a + b + c;
}

console.log(add2(3, 5));

// understanding closure and how to do OOP in JS

function createCounter() {
    let value = 0;

    function increment() {
        return ++value;
    }

    return {
        increment: increment
    }
};

const counter1 = createCounter();
console.log(counter1.increment());
console.log(counter1.increment());

const counter2 = createCounter();
console.log(counter2.increment());

// spread operator

let a = [1, 2];
let b = [3, 4];

console.log([...a, ...b]);

function add3(...args) {
    console.log(args[0] + args[1]);
}

add3(1, 4);

// factory functions that return another functions
// higher order functions

function func1() {
    return function() {
        return 7;
    }
}

console.log(func1()());