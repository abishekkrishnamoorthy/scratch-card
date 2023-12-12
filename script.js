const screen=document.querySelector('.screen')
screen.addEventListener('mousemove',(e)=>{
    var span=document.createElement('span')
    span.style.top=e.pageY+'px'
    span.style.left=e.pageX+'px'
    screen.appendChild(span)
    console.log('working')
})