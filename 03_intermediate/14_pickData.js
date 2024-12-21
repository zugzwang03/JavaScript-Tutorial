// const user = ['shreya', 3, 'admin'];
// var role = user[2];
// var name = user[0];

// console.log(role);

// var [name, courseCount, role] = user;

// console.log(name);

const myUser = {
    name: "shreya",
    courseCount: 5,
    role: "user"
};

console.log(myUser.courseCount);

const {name, mycourseCnt, role} = myUser;
console.log(name);
console.log(role);

console.log(mycourseCnt);
