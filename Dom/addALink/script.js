// Add a link back to the source of the text after the paragraph tag (https://forcemipsum.com/)

const para = document.querySelector('p');

const link=document.createElement('a')
link.href="https://forcemipsum.com/"
link.innerText="Link"

// document.body.appendChild(link)

para.after(link)