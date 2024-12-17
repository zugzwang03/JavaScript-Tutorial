// Falsy
// undefined
// null
// ''
// 0
// NaN

var user = '2'
// coercion
if (2 == user) {
    console.log("display it!")
}

if(2 === user) {
    console.log("exact value and type");
}

// console.log(2 + 2)
// console.log('2' + 2)
// console.log(2 + '2')