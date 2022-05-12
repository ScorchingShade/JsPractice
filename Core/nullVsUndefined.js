//1. What will be logged in first example and second example

let var1;
console.log(var1);
console.log(typeof var1);

let var2 = null;
console.log(var2);
console.log(typeof var2);


// console log will be:
// undefined
// undefined
// null
// object


// This is because while undefined is a primitive type in js , there is no null type in js
// We should try to use as little undefined as possible as null values are easier to catch