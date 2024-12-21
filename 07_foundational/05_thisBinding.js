const shreya = {
    firstName: "Shreya",
    lastName: "Sarkar",
    role: "user",
    courseCnt: 3,
    getInfo: function () {
        console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
            Her role is ${this.role}
            and she is studying ${this.courseCnt} courses`
        );
    }
};


const riya = {
    firstName: "Riya",
    lastName: "Sarkar",
    role: "admin",
    courseCnt: 4
};

shreya.getInfo.bind(riya)();
// riya.getInfo();

// bind gives you a reference back and you have to run it

shreya.getInfo.call(riya);