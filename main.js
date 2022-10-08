let circle = document.querySelectorAll('.circle')
let bar = document.querySelectorAll('.bar')
let width = bar[0].getBoundingClientRect().width
let x = bar[0].getBoundingClientRect().left
let barGreen = '#A4F3EB';
let barGrey = '#ECF0FB';
circle.forEach((draggable) => {
    draggable.addEventListener('mousedown', () => {
        document.addEventListener('mousemove', drag);
        draggable.style.backgroundColor = '#24AEA1'
    })
})
function drag(event) {
    if(window.innerWidth <= 480){
        width = bar[1].getBoundingClientRect().width
        x = bar[1].getBoundingClientRect().left
    }
    let left = event.clientX - x
    let perc = Math.round(left / width * 1000) / 10
    if (left < 0) {
        left = 0
    } else if (left > width) {
        left = width
    }
    circle.forEach((cir) => {
        cir.style.left = `${left}px`
    })
    bar.forEach((bar) => {
        bar.style.background = `linear-gradient(to right, ${barGreen} ${perc - 0.1}%, ${barGrey} ${perc}%)`
    })
}
document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', drag);
    circle.forEach((draggable) => {
        draggable.style.backgroundColor = '#7AEADF'
    })
})