// create a counter function which has increment and getValue functionality


const counter = ()=> {
	let count = 0;

	return {
		increment: function(val=1){
			count+=val;
		},
		getValue: function(){
			return count;
		},
        
	};
   
};

const privateCounter= counter();
privateCounter.increment(3);
console.log(privateCounter.getValue());


// closure is a function that has access to the variables in its lexical scope even after the function has returned.
// lexical scope is the scope in which a variable is defined.  
