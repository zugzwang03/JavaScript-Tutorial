const nums = [1, 2, 3, 4, 5];

function fn(init, n) {
    return init + n;
}

// console.log(nums.reduce(fn, 0));

var arrayReduce = (nums, fn, init) => {
    let res = init;
    // for(const val of nums) {
    //     res = fn(res, val)
    // }

    nums.forEach(val => {
        res = fn(res, val);
    });
    return res;
}

console.log(arrayReduce(nums, fn, 0));
