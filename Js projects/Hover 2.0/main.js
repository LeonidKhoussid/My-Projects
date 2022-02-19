const triangle = document.querySelector('#triangle')

triangle.addEventListener('mouseenter', ()=>{
    if(!triangle.classList.contains('hover')){
        triangle.classList.add('hover')
    }
})
triangle.addEventListener('mouseleave', ()=>{
    if(triangle.classList.contains('hover')){
        triangle.classList.remove('hover')
    }
})