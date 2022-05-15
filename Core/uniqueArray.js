// Remove all duplicates in array 

const arr =[1,1,22,22,3,4,3,4]

// easiest trick
const uniqueArr = (arr)=>{
    const unqArr= [...new Set(arr)];

    return unqArr
}

// using filter function
// The indexOf will get the first index of the element, if that is not equal to the current index, it will be ignored.
const uArr =(arr)=>{
    return arr.filter((item, index, array)=>array.indexOf(item)===index)
}

//using for each
const array1=[]
arr.forEach((item, index)=>{
    if(arr.indexOf(item)===index)
    array1.push(item)
})

console.log(array1)