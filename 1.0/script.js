const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const acButton = document.querySelector('[data-ac]')
const delButton = document.querySelector('[data-del]')
const equalButton = document.querySelector('[data-equal]')

const previousDiv = document.querySelector('[data-previous]')
const currentDiv = document.querySelector('[data-current]')

var previousOperand = ''
var currentOperand = ''

// EVENTOS

// NÃO FUNCIONOU
// for (var i = 0; i < 11; i++)
//     numberButton[i].addEventListener('click', () => {
//         addNumber(numberButton[i].innerText)
//     })
// NÃO FUNCIONOU 

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

acButton.addEventListener('click', clear)

equalButton.addEventListener('click', equal)

delButton.addEventListener('click', del)


function clear() {
    previousOperand = ''
    currentOperand = ''
    updateDisplay()
}

function del() {
    currentOperand = currentOperand.slice(0, -1)
    updateDisplay()
}

function equal() {
    currentOperand = eval(previousOperand + currentOperand)
    previousOperand = ''
    updateDisplay()
}

function addNumber(number) {
    if(number != '.' || getLast() != '.')
        currentOperand += number
    updateDisplay()
}

function addOperation(operation) {
    if(getLast() != '+' || getLast() != '-' || getLast() != '/' || getLast() != '*') {
        previousOperand += currentOperand + ' ' + operation + ' '
        currentOperand = ''
    }
    updateDisplay()
}

function updateDisplay() {
    previousDiv.innerText = previousOperand
    currentDiv.innerText = currentOperand
}

function getLast() {
    return currentOperand[currentOperand.length - 1]
}