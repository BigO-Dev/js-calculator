let displayText = document.querySelector('.display__text')
let numberBtn = document.querySelectorAll('.number')
let operatorBtn = document.querySelectorAll('.operator')
let equalBtn = document.querySelector('.btn__equal')
let delBtn = document.querySelector('.btn__del')
let clearBtn = document.querySelector('.btn__clear')

numberBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (displayText.value === '0') {
      displayText.value = ''
    }
    displayText.value += btn.textContent
  })
})

operatorBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    displayText.value += btn.textContent
  })
})

delBtn.addEventListener('click', () => {
  displayText.value = displayText.value.slice(0, -1)
})

equalBtn.addEventListener('click', calculate)

clearBtn.addEventListener('click', clearDisplay)

function clearDisplay() {
  displayText.value = '0'
}

function calculate() {
  let calculation = displayText.value
  let result = eval(calculation)
  displayText.value = result
}
