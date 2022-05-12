// what will be console logged here

console.log(foo)
foo=1;

// here we will get an error
// hoisiting means that the declaration of our variable will bubble to the top of the file.
// since we are not using var, let , const keyword, we will get an error saying that foo is not defined


// hoisting is a process where the variable is declared but not initialized.
// this is a common problem in javascript.
// we can solve this problem by using var, let, const keyword
// var keyword is used to declare a variable.
// let keyword is used to declare a variable but it will not bubble up.   
// const keyword is used to declare a variable but it will not bubble up as well.
// const and let maintain the scope of the variable. This means that the variable will be available only within the function at the particular line it is declared and any call above  it will result in error.


//2. what will be console logged here
console.log(bar)
var bar = 1;

// the above will log undefined now because now the variable is 
//declared using var, but it is being used before it is initialized.


//3 what will be console logged here
baz=1;
console.log(baz)
var baz;

// the above will log 1 now because now the variable is both defined and initialized

//4. what will be console logged here
console.log(qux())

function qux() {
    return 1;
}
// The above will log 1 now because now the function is defined and initialized. 
// Functions also bubble to top in declaration

//5. what will be console logged here
console.log(quux)
const quux = 1;

// this will throw an error because const does not bubble up