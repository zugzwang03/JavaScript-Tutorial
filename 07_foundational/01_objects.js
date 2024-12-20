// functional approach of defining objects
var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is: ${this.courseCount}`);
    };
};

var shreya = new User('shreya', 3);
console.log(shreya);
var riya = new User('riya', 4);
console.log(riya);
