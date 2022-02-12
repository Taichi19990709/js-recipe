const display = document.getElementById("display")
const button = document.getElementById("plusbutton")
const discount = document.getElementById("discount")
const double = document.getElementById("double")
let count = 0
button.onclick = function () {
  count++
  display.textContent = count
}

discount.onclick = function () {
  count--
  display.textContent = count
}

double.onclick = function () {
  count * 2
  display.textContent = count
}

const counter = document.getElementById("counter")
const way = document.getElementById("way")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const times = document.getElementById("times")
const divide = document.getElementById("divide")
let number = 0

one.onclick = function () {
  counter.textContent = 1
}
