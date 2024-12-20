// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

const myStates = [1947, 'Rajasthan', 'Delhi', 'Assam', 'Tamil Nadu', 'West Bengal'];
// for (let i = 0; i < myStates.length; i++) {
//     if (typeof myStates[i] !== 'string')
//         continue;
//     console.log(myStates[i]);
// }
let i = 0;
// while(i < myStates.length) {
//     console.log(myStates[i]);
//     i++;
// }

// do {
//     console.log(myStates[i]);
//     i++;
// } while(i < myStates.length);

// myStates.forEach(s => console.log(s));

const names = ["Youtube", 'Netflix', 'Amazon', 'Flipkart', 'Instagram', 'Facebook']

for(const name of names) {
    console.log(name);
}

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    fk: "Flipkart"
};

for(const n in symbols) {
    console.log(`Key is ${n} and symbol value is ${symbols[n]}`);
}