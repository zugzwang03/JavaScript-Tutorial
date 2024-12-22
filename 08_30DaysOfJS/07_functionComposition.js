const fn1 = (x) => x = x + 1;
const fn2 = (x) => x = x * 2;

console.log(fn1(fn2(4)));

var compose = function(functions) {
    fn = (cul, f) => f(cul);

    return function(x) {
        return functions.reduceRight(fn, x);
    }
    return function(x) {
        let res = x;
        for(const fn of functions.reverse()) {
            res = fn(res);
        }
        return res;
    }
}

console.log(compose([fn1, fn2])(4));