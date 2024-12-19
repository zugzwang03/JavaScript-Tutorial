// arrow function
var isEven = (element) => {
    //     if(element % 2 == 0) {
    //         return true;
    //     }
    //     return false;
    return (element % 2 == 0);
}

// console.log(isEven(3));

// callback function
var result = [2, 3, 6, 8].every((e) => (e % 2 === 0));
console.log(result);
