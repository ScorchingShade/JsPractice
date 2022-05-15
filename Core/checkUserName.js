// Check that user with such name exists in array of objects


const users = [
	{
		id: 1,
		name: 'Jack',
		isActive: true,
		age: 21,
	},
	{
		id: 2,
		name: 'Jill',
		isActive: false,
		age: 18,
	},
	{
		id: 3,
		name: 'John',
		isActive: true,
		age: 30
	}
];

//check for jill

const findUser=(userName)=>{
    return users.findIndex((user)=>user.name===userName)>-1?true:false;
}


//using some 
const findUserAgain =(userName)=>{
    return users.some((user)=>user.name===userName);
}

// console.log(findUser('Jill'))

console.log(findUserAgain('Jack'))