var User = {
    name: "",
    getUserName: function () {
        console.log(`User name is: ${this.name}`);
    }
};

var shreya = Object.create(User);
console.log(shreya);
shreya.name = "Shreya Sarkar"
shreya.getUserName();

var riya = Object.create(User, {
    name: { value: "riya" },
    courseCount: { value: 3 }
});

riya.getUserName();
