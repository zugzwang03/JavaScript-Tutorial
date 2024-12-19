var user = {
    firstName: 'Shreya',
    lastName: 'Sarkar',
    role: 'user',
    loginCount: 33,
    facebookSignedIn: true
}

console.log(user.firstName);
console.log(user['lastName']);

user.loginCount = 45;
console.log(user.loginCount);
console.table(user);