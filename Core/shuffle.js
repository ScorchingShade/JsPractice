// write a function to shuffle the elements


const num =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];


const shuffle =(items)=>{
   return items.map((item)=>({sort:Math.random(),item})).sort((a,b)=>a.sort-b.sort).map((a)=>a.item)
}

console.log(shuffle(num))

// We shuffle in a three step process
// 1. We mutate our original array to contain a key for each item.
// 2. This numeric key can be generated using Math.random(). Now this will serve as an index we can use to shuffle items.
// 3. Next we sort the mutated array using this numeric key. Even though we are sorting the array, because of this random
// numeric key, our elements will take completely random positions.
// 4. Finally, we get our original array back by doing a final mutation using map to get our object


