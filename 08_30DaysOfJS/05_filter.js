var filter = function(arr, fn) {
    // declarative programming
    // return arr.filter(fn);

    // const n = null;
    // const n; // undefined

    const value = "hello" || False;
    console.log(value);

    if(value) {
        console.log("value is true");
    }

    const nullishCoalescing = null ?? "Hello";
    console.log(nullishCoalescing);
    
    
    // imperative programming
    const res = [];
    for(const val of arr) {
        if(fn(val))
            res.push(val);
    }
    return res;
}

const greaterThan10 = (n) => {
    return n > 10;
}

console.log(filter([10, 20, 30, 40], greaterThan10));