var name = "Shreya";

console.log("Line number 3", name);

function sayName() {
    // var name = "ms s"
    console.log("Line number 6", name);
    sayNameTwo()

    function sayNameTwo() {
        // var name = "ms. ss"
        console.log("Line number 10", name);
    }
}

sayName()
