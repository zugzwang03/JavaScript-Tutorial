var curry = function (fn) {
    let res = []
    return function curried(...args) {
        res = [...res, ...args]
        if (res.length == fn.length) {
            let val = fn(...res);
            res = []
            return val;
        }
        else {
            return curried;
        }
    }
}

const add = (a, b, c, d) => {
    return a + b + c + d;
}

const curry1 = curry(add);
console.log(curry1(3, 4, 5)(2));