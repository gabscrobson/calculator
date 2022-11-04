// VARIABLES AND CONSTANTS
const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const resetButton = document.querySelector('[data-reset]')
const delButton = document.querySelector('[data-del]')
const equalButton = document.querySelector('[data-equal]')

const textDiv = document.querySelector('#screen')

var operand = ''


// LISTENERS
numberButton.forEach(button => {
    button.addEventListener('click', () => {
        addNumber(button.innerText)
    })
})

operationButton.forEach(button => {
    button.addEventListener('click', () => {
        addOperation(button.innerText)
    })
})

resetButton.addEventListener('click', clear)

equalButton.addEventListener('click', equal)

delButton.addEventListener('click', del)


// FUNCTIONS
function clear() {
    operand = ''
    updateDisplay()
}

function del() {
    operand = operand.slice(0, -1)
    updateDisplay()
}

function equal() {
    operand = eval(operand)
    updateDisplay()
}

function addNumber(number) {
    if(number != '.' || getLast() != '.')
        operand += number
    updateDisplay()
}

function addOperation(operation) {
    if(getLast() != '+' || getLast() != '-' || getLast() != '/' || getLast() != '*') {
        operand += operation
    }
    updateDisplay()
}

function updateDisplay() {
    textDiv.innerText = operand
}

function getLast() {
    return operand[operand.length - 1]
}