// Promises:
//  1) Resolve
//  2) Pending
//  3) Reject

const promise = new Promise(callback)

promise
.then(() => console.log('hello'))
.catch(() => console.log('promise rejected'))
.finally(() => console.log('Promise completed'));

function callback(resolve, reject) {
    // Async operation

    // network call, disk read I/O

    // single threaded

    // setTimeout(() => reject(), 1000);

    try {
        // network
        resolve();
    } catch(err) {
        reject('Error occured')
    }
}