// sayHello();
// function sayHello() {
//     console.log("Hello")
// }

// if(2 === "2") {
//     console.log("this is true");
    
// }

// var myName = "Shreya"
// // global context
// if(myName === window.myName) {
//     console.log("true statement");
// }

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
} 

tipper("5")

var bigTipper = function (a) {
    var bill = parseInt(a)
    console.log(bill + 15);
}

bigTipper("5");

console.log(name)
var name = "shreya"

function sayName() {
    var name = "ms. s"
    console.log(name);
}
sayName();
console.log(name)