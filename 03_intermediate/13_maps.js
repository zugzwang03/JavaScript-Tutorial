var myMap = new Map();

myMap.set(0, "Uno");
myMap.set(1, "dos");
myMap.set(2, "Tres");
myMap.set(3, "Cuatro");

console.log(myMap);


for (let key of myMap.keys()) {
    console.log(`Key is ${key}`);
}

for (let value of myMap.values()) {
    console.log(`Value is ${value}`);
}

for (let [key, value] of myMap) {
    console.log(`Key is ${key} and Value is ${value}`);
}

myMap.forEach((value, key) => console.log(`${value} and key is ${key}`));

myMap.delete(2);
console.log(myMap);
