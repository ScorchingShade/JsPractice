// Write a function which get's an array and an element and returns an array with this element at the end 

//simple solution, shallow copy == a copy of an object where both objects point to same reference in memory
function addToArray (arr, ele){
    arr.push(ele)
    return arr
}

addToArray([1,2,3],4)

// console.log(addToArray([1,2,3],4))


// adding without modifying original array, deep copy = a copy of an object where both objects do not point to same reference in memory
let numArr =[1,2]

const appendToArray = (arr, ele)=>{
    return [...arr, ele]
}

console.log(numArr)
console.log(appendToArray(numArr,3))