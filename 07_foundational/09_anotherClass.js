const User = require("./08_classes.js");

const shreya = new User("shreya", "shreya@gmail.com");

console.log(shreya.getInfo().email);
shreya.enrollCourse("React Bootcamp");
shreya.enrollCourse("Angular Course");

console.log(shreya.getCourseList());

let courses = shreya.getCourseList();

courses.forEach(c => {
    console.log(c);
});