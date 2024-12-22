// var mapping = function(arr, fn) {
//     return arr.map(fn);
// }

// const add = (...args) => {
//     console.log(args[0], args[1]);
    
//     return args[0] + args[1];
// }

// console.log(mapping([2, 3], add));


// -----Strategic Design Pattern------
// The process of passing a function as a parameter into another function.
// Open-Closed Principle

var mapping = (arr, fn) => {
    // let res = [];
    let res = new Array(arr.length); // dynamic arrays
    for(let idx in arr) {
        // res.push(fn(arr[idx], Number(idx)));
        res[idx] = fn(arr[idx], Number(idx));
    }
    return res;
}

const add = (val, idx) => {
    return val + idx;
}

console.log(mapping([2, 3], add));
