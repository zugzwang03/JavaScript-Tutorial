var num1 = 7;
var num2 = 6;

// console.log(num1 * num2)

var answer = num1 > num2
// console.log(answer)

// D = (L - S) / L * 100 

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log("Discount percentage is: " + discountPercent)

displayDiscountPercentage = Math.round(discountPercent);

console.log(displayDiscountPercentage + "% off");

console.log(typeof discountPercent)
console.log(typeof displayDiscountPercentage)