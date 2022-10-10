let circle = document.querySelectorAll('.circle')
let bar = document.querySelectorAll('.bar')
let width = bar[0].getBoundingClientRect().width
let x = bar[0].getBoundingClientRect().left
let barGreen = '#A4F3EB';
let barGrey = '#ECF0FB';
let views = document.querySelectorAll('.pageviews')
let prices = document.querySelectorAll('.price')
let input = document.querySelectorAll('input')

document.addEventListener('touchmove', (event) => {
   let clientX = event.changedTouches[0].clientX
    width = bar[1].getBoundingClientRect().width
    x = bar[1].getBoundingClientRect().left
    let left = clientX - x
    if (left <= width / 10) {
        left = 0
        views.forEach((view) => {
            view.innerHTML = `10K PAGEVIEWS`
        })
        prices.forEach((price) => {
            price.innerHTML = `$8.00 <span>/&nbsp;&nbsp;month</span>`
        })
    } else if (left >= width / 10 * 9) {
        left = width
        views.forEach((view) => {
            view.innerHTML = `1M PAGEVIEWS`
        })
        prices.forEach((price) => {
            price.innerHTML = `$36.00 <span>/&nbsp;&nbsp;month</span>`
        })
    } else if (left > width / 10 && left <= width / 10 * 3) {
        left = width / 4
        views.forEach((view) => {
            view.innerHTML = `50K PAGEVIEWS`
        })
        prices.forEach((price) => {
            price.innerHTML = `$12.00 <span>/&nbsp;&nbsp;month</span>`
        })
    } else if (left > width / 10 * 3 && left <= width / 10 * 7) {
        left = width / 2
        views.forEach((view) => {
            view.innerHTML = `100K PAGEVIEWS`

        })
        prices.forEach((price) => {
            price.innerHTML = `$16.00 <span>/&nbsp;&nbsp;month</span>`
        })
    } else if (left > width / 10 * 3 && left < width / 10 * 9) {
        left = width / 2 + width / 4
        views.forEach((view) => {
            view.innerHTML = `500K PAGEVIEWS`
        })
        prices.forEach((price) => {
            price.innerHTML = `$24.00 <span>/&nbsp;&nbsp;month</span>`
        })
    }
    circle.forEach((cir) => {
        cir.style.left = `${left}px`
    })
    let perc = Math.round(left / width * 1000) / 10
    bar.forEach((bar) => {
        bar.style.background = `linear-gradient(to right, ${barGreen} ${perc - 0.1}%, ${barGrey} ${perc}%)`
    })
});

input.forEach((inp) => {
    inp.addEventListener('click', () => {
        if (inp.checked) {
            let num = prices[0].innerHTML.replace(/\D/g, "");
            let price = num / 100 / 4 * 3
            prices.forEach((pricer) => {
                pricer.innerHTML = `$${price}.00 <span>/&nbsp;&nbsp;month</span>`
            })
        } else {
            let num = prices[0].innerHTML.replace(/\D/g, "");
            let price = num / 100 / 3 * 4
            prices.forEach((pricer) => {
                pricer.innerHTML = `$${price}.00 <span>/&nbsp;&nbsp;month</span>`
            })
        }
    })
})
circle.forEach((draggable) => {
    draggable.addEventListener('mousedown', () => {
        document.addEventListener('mousemove', drag);

        draggable.style.backgroundColor = '#24AEA1'
    })
})

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', drag);
    circle.forEach((draggable) => {
        draggable.style.backgroundColor = '#7AEADF'
    })
})


function drag(event) {
    let left = event.clientX - x
    if (left <= width / 10) {
        left = 0
        views.forEach((view) => {
            view.innerHTML = `10K PAGEVIEWS`
        })
        prices.forEach((price) => {
            price.innerHTML = `$8.00 <span>/&nbsp;&nbsp;month</span>`
        })
    } else if (left >= width / 10 * 9) {
        left = width
        views.forEach((view) => {
            view.innerHTML = `1M PAGEVIEWS`
        })
        prices.forEach((price) => {
            price.innerHTML = `$36.00 <span>/&nbsp;&nbsp;month</span>`
        })
    } else if (left > width / 10 && left <= width / 10 * 3) {
        left = width / 4
        views.forEach((view) => {
            view.innerHTML = `50K PAGEVIEWS`
        })
        prices.forEach((price) => {
            price.innerHTML = `$12.00 <span>/&nbsp;&nbsp;month</span>`
        })
    } else if (left > width / 10 * 3 && left <= width / 10 * 7) {
        left = width / 2
        views.forEach((view) => {
            view.innerHTML = `100K PAGEVIEWS`

        })
        prices.forEach((price) => {
            price.innerHTML = `$16.00 <span>/&nbsp;&nbsp;month</span>`
        })
    } else if (left > width / 10 * 3 && left < width / 10 * 9) {
        left = width / 2 + width / 4
        views.forEach((view) => {
            view.innerHTML = `500K PAGEVIEWS`
        })
        prices.forEach((price) => {
            price.innerHTML = `$24.00 <span>/&nbsp;&nbsp;month</span>`
        })
    }
    circle.forEach((cir) => {
        cir.style.left = `${left}px`
    })
    let perc = Math.round(left / width * 1000) / 10
    bar.forEach((bar) => {
        bar.style.background = `linear-gradient(to right, ${barGreen} ${perc - 0.1}%, ${barGrey} ${perc}%)`
    })

}