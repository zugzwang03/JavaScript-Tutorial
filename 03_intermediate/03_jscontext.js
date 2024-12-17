sayHello();
function sayHello() {
    console.log("Hello")
}

if(2 === "2") {
    console.log("this is true");
    
}

var myName = "Shreya"
// global context
if(myName === window.myName) {
    console.log("true statement");
}