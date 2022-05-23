// find the number of occurences of a minimum value.

const num = [1,2,3,4,5,6,7,8,9,10,1,1,1,1]

// using the O(n) for loop method

const minValOc = (num)=>{
    let minVal=1;

    for(let i=0; i<num.length; i++){
        if (num[i]<num[i+1]){
            let c= num[i];
            num[i]=num[i+1];
            num[i+1]=c;
        }
    }

    for( let i=num.length-1; i>0;i--){
        if (num[i]===num[i-1])
            minVal++;
    }

    return minVal;
}


// using Array functions
const minvalEx=(num)=>{
    let minVal=1;
     num.sort((a,b)=>(b-a)).map((a,index)=>{return num[index]===num[index+1]?minVal++:num[index] })
     return minVal
}


// Using Math function
const minValSEx=(num)=>{
    const Min= Math.min(...num)
    const minArr = num.filter((ele)=>ele===Min)

    return minArr.length
}

console.log(minValSEx(num))