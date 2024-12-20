console.log(this)

// var game = "football"

// function sayName() {
//     var name = "Shreya"
//     console.log(this)
// }

// sayName()

var user = {
    name: "Shreya",
    courseCnt: 4,
    getCourseCnt: function() {
        console.log("line 16:", this);
        function getHello() {
            console.log('hello');
            console.log(this);
        }
        getHello();
        return this.courseCnt;
    },
}

user.getCourseCnt();