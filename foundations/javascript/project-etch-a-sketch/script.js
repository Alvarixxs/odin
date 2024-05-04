
let container = document.querySelector('#container')

let button = document.querySelector('#button')
button.addEventListener('click', e => {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    let num = -1
    while (num < 0 || num > 100) {
        num = prompt('Enter a number between 0 and 100')
    }

    for (let i = 0; i < num; i++) {
        let row = document.createElement('div')
        row.style.display = 'flex'
        row.style.flex = '1 1 auto'
        for (let j = 0; j < num; j++) {
            let pixl = document.createElement('div')
            pixl.style.outline = '2px solid black'
            pixl.style.flex = '1 1 auto'
            pixl.style.background = '#135F34'
            pixl.addEventListener('pointerenter', e => pixl.style.background = 'yellow')
            row.appendChild(pixl)
        }
        container.appendChild(row)
    }
})