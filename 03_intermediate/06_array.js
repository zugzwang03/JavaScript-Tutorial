var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Rajasthan", "Delhi", "Assam");

console.log(states[1]);
console.log(states.length);

states[0] = 'Punjab';
console.log(states);

var user = ['shreya', 'shreya@gmail.com', 34, true]
console.log(user)

user.pop();
user.pop();
// console.log(user);
user.unshift("new value");
// console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf('shreya'));
console.log(Array.from("shreya"));

