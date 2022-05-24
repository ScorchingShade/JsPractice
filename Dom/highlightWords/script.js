// Highlight all of the words over 8 characters long in the paragraph text (with a yellow bg)


const para = document.querySelector('p');

para.innerHTML=para.innerHTML.split(" ").map((ele)=>ele.length>8?`<span style="background-color:yellow">${ele}</span>`:ele).join(" ")

console.log("para",para.innerHTML)