//Sort the array of numbers 

const num =[21,1,233,2,33,5,12];

console.log(num.sort((a,b)=>a-b))

//Sort array of objects by author's lastname
//array of books
const books = [
    {name:"Harry Potter", author:"Joanne Rowling"},
    {name:"Lord of the Rings", author:"J Tolkien"},
    {name:"The Catcher in the Rye", author:"J Salinger"},
    {name:"The Great Gatsby", author:"F Fitzgerald"},
]

// localeCompare compares the strings based on the current locale set in the browser.
const sortBooks =(books)=>{
    return books.sort((a,b)=>a.author.split(' ')[1].localeCompare(b.author.split(' ')[1]))
}

// console.log(sortBooks(books))


//Sort array of objects by author's lastname
// shorthand
console.log(books.sort((a,b)=>a.author.split(' ')[1].localeCompare(b.author.split(' ')[1])));