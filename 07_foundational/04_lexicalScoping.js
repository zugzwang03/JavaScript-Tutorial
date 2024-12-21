function init() {
    var firstName = "shreya";
    console.log("Init inside");

    function sayFirstName() {
        console.log(firstName);
    }
    return sayFirstName;
}

var value = init();
value();
// out of scope; concept of closure
// console.log(firstName);


function doAddition(x) {
    return function (y) {
        return x + y;
    };
};

var add5 = doAddition(4);
console.log(add5(5));

console.log(doAddition(5)(5));
// doAddition()()() // curring