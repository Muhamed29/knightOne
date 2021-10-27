var links = document.querySelectorAll('li a');
for (const link of links){
link.addEventListener('scroll', (e)=>{
    e.preventDefault();
})
}