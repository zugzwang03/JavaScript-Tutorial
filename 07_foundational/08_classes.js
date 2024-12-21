class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    courseList = [];
    getInfo() { // method
        return {
            name: this.name,
            email: this.email
        };
    }
    enrollCourse(name) {
        this.courseList.push(name);
    }
    getCourseList() {
        return this.courseList;
    }
}

let shreya = new User("shreya", "shreya@gmail.com");

module.exports = User;