class Counter {
    constructor(init) {
        this.init = init;
        this.count = init;
    }

    increment() {
        return ++this.count;
    }

    decrement() {
        return --this.count;
    }

    reset() {
        this.count = this.init;
        return this.count;
    }
}

const counter1 = new Counter(10);
console.log(counter1.increment());
console.log(counter1.increment());
