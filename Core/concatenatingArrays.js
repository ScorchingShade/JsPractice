// Write a function to concatenate two Arrays 


//with spread
const add=(arr1, arr2)=>{
    return [...arr1, ...arr2]
}

let arr1=[1,2,3];
let arr2=[4,5];

console.log(add(arr1, arr2));

//with array concat 
const concat=(arr1, arr2)=>{
    return arr1.concat(...arr2);
}

console.log(concat(arr1, arr2));