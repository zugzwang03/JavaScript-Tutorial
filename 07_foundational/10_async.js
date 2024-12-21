const uno = () => {
    console.log("I am One");
}

const dos = () => {
    setTimeout(() => {
        console.log("Wohoo");
    }, 1000);
    console.log("I am Two");
}

const tres = () => {
    console.log("I am Three");
}

uno();
dos();
tres();

// event loop
// processes messages in queue based on availability
// non-blocking I/O
// concurrency model