// functional approach of defining objects
var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function() {
    console.log(`Your first name is ${this.firstName}`);
}

var shreya = new User('shreya', 3);
shreya.getCourseCount();
shreya.getFirstName();
// console.log(shreya);
var riya = new User('riya', 4);
riya.getCourseCount();
riya.getFirstName();
// console.log(riya);
