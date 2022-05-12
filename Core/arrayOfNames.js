//1. Write code to get array of names from given array of users 

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

// eslint-disable-next-line no-unused-vars
const arrayOfNames= users.map(items=> items.name);

// console.log(arrayOfNames)


//2. get only active users from the array of users
// eslint-disable-next-line no-unused-vars
const activeUsers = users.filter((users)=>users.isActive===true).map((activeUser)=>activeUser.name);

// console.log(activeUsers);

//3. sort users based on age descending order (highest to lowest)

const sortedUsersDesc = users.sort((a,b)=>b.age-a.age).map(users=>users.name);

console.log(sortedUsersDesc);