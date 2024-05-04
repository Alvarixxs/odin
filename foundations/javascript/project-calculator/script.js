
let first=0
let second=0
let operation=""

function operate(operation,first,second) {
    if (operation === '+')
        return first + second
    else if (operation === '-')
        return first - second
    else if (operation === '*')
        return first * second
    else if (operation === '/') {
        if (second === 0)
            return undefined
        else
            return first / second
    }
}

let display = document.querySelector(".display")

let operBtn = document.querySelectorAll(".oper")

operBtn.forEach(operBtn => {operBtn.addEventListener('click',e => display.innerText+=operBtn.innerText)})

let ac = document.querySelector('.ac')

ac.addEventListener('click', e => display.innerText="")

let calculate = document.querySelector(".operate")

