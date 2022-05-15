// write a function which implements a range,
// e.g range(1,50)
//1,2,3,4,5,....50,


//using for loop
const range=(num1, num2)=>{
   const arr=[];
    for(let i=num1; i<num2; i++){
        arr.push(num1)
        num1++;
   }

   return arr;
}

// console.log(range(1,50))

//using Array functions 
const range2 =(num1,num2)=>{
    return [...Array(num2).keys()].map(ele=>ele+num1)
}

console.log(range2(1,50))