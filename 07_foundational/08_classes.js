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
    login() {
        return "You are logged in";
    }
}

class SubAdmin extends User {
    constructor(name, email) {
        super(name, email);
    }
    getAdminInfo() {
        return "I have sub-admin access";
    }
    login() {
        return super.login();
        // return "login for sub-admin only";
    }
};

const tom = new SubAdmin("tom", "tom@gmail.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());

let shreya = new User("shreya", "shreya@gmail.com");
console.log(shreya.getInfo());
shreya.enrollCourse("Angular Course");
console.log(shreya.getCourseList());
console.log(shreya.courseList); // undefined

module.exports = User;