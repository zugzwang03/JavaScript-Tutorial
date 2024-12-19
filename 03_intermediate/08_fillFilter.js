var testArray = [2, 4, 6, 8, 9, 7, 5, 3];

console.log(testArray.fill("h", 5));

const myNumber = [23, 24, 25, 55, 66, 77, 87, 98];

const result = myNumber.filter((num) => num != 55);

console.log(result);

var users = ['user1', 'user2', 'user3', 'user4', 'user5']
console.log(users.slice(2, 4));
console.log(users.slice(2));
// starting point, count
users.splice(2, 3, 'user', 'user00')
console.log(users);




