//1. Write a function which helps to achieve multiply(a)(b) and returns product of a and b.

function multiply(a){
    return (b)=>{
        return a*b;
    }
}

//easier way 
const multiply2 = (a)=>(b)=>a*b;

// console.log(multiply(2)(3));

// javascript currying is a technique to convert a function with multiple arguments into a function with a single argument.
// In currying the function will return a function which accepts the remaining arguments.


//2. Create a currying function for summation of a,b,c where the function can accept any number of arguments
const curry =(fn)=>{
    let arity = fn.length;
    //A curried function is always returned
    return curried=(...arg)=>{
        if(arg.length>=arity){
            //it means we have required number of arguments and can simply return the function to calculate
            return fn(...arg)
        }
        else{
            // else we would need to kind of recursively check if we have more args
            return curryMore=(...newArgs)=>{
                // we concat this because in case we have args like (1)(2,3) this will be first spread as [1],[2,3] then added to original args as 
                // [1,2,3] 
                const moreArgs=arg.concat(newArgs);
                return curried(...moreArgs)
            }
        }
    }
}

//we create the curried function which can hold our args
const currySum= curry((a,b,c)=>a+b+c);

//Now we can call the curried function with any number of arguments
// console.log(currySum(2)(1,23))




// 3. Why do we need a currying function? 
// What can a curry function do?

//Curry is useful in real life situations where we are not sure what arguments to expect.
// For example we can create a get function that currys over property and object

const get=curry((property,object)=>object[property])

// console.log(get('id', {id:1}))

//now that we have the get function we can further reduce this as follows:
const getId=get('id')

// console.log(getId({id:2,name:"ankush"}))




