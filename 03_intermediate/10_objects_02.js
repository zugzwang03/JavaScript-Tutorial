var user = {
    firstName: 'Shreya',
    lastName: 'Sarkar',
    role: 'user',
    loginCount: 33,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function(courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount: function() {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses.`
    }
}

console.log(user);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
console.log(user.getCourseCount());
