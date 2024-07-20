//    --------> BASIC TYPESCRIPT PART 2 <--------
//     -------->logical Operator<--------
// i.e : { AND (&&), or (||), NOT(!) }
let num1 = 10;
let num2 = 20;
console.log(num1 == num2 && num1 < num2); //flase
console.log(num1 != num2 && num1 < num2); //true
console.log(num1 == num2 || num1 < num2); //true
console.log(num1 != num2 || num1 < num2); //true
console.log(!(num1 < num2)); //false
console.log(!(num1 != num2)); //false
//    --------> Logic Statement / Conditional Statement <--------
//  i.e. : { if, else if, else }
let num3 = 10;
let num4 = 20;
if (num3 === num4) {
    console.log("both are equal");
}
else {
    console.log("both are not equal");
}
// 2 Example
if (num3 != num4) {
    console.log("both are equal");
}
else {
    console.log("both are not equal");
}
// 3 Example
if (num3 != num4) {
    console.log("both are equal");
}
else if (num3 < num4) {
    console.log("num3 is less than num4");
}
else {
    console.log("both are not equal");
}
// 4 Example
let isRaining = false;
if (isRaining) {
    console.log("wear a raincoat");
}
else {
    console.log("wear Sunglasses");
}