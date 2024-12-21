class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    #courseList = []; // private attribute starts with #
    getInfo() { // method
        return {
            name: this.name,
            email: this.email
        };
    }
    enrollCourse(name) {
        this.#courseList.push(name);
    }
    getCourseList() {
        return this.#courseList;
    }
}

let shreya = new User("shreya", "shreya@gmail.com");
console.log(shreya.getInfo());
shreya.enrollCourse("Angular Course");
console.log(shreya.getCourseList());
console.log(shreya.courseList); // undefined

module.exports = User;