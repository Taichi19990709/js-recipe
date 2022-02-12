const addButton = document.getElementById("add-button")
const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")

addButton.onclick = function () {
  const card = createCard(inputElement.value)
  container.append(card)
  inputElement.value = ""
}
// inputElement.onclick = function () {
// if (inputElement.value !== "") {
// document.onkeydown = function (event) {
// if (event.key === "Enter") {
// const card = createCard(inputElement.value)
// container.append(card)
// inputElement.value = ""
// }

inputElement.addEventListener("keydown", test_event)

function test_event(e) {
  if (e.keyCode === 13 && inputElement.value !== "") {
    const card = createCard(inputElement.value)
    container.append(card)
    inputElement.value = ""
  }
}

const createCard = function (text) {
  const card = document.createElement("div")
  card.className = "card"
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"
  deleteButton.onclick = function () {
    card.remove()
  }
  card.append(todo)
  card.append(deleteButton)
  return card
}

const inputContainer = document.getElementsByClassName("input-container")
const listFooter = document.getElementById("list-footer1")
const addtext = document.getElementById("aaa")
// addtext.onclick = function () {
//   const textfield = document.createElement("input")
//   textfield.id = "input-todo"
//   textfield.className = "input-todo"
//   listFooter.append(textfield)
//   addtext.remove()
// }

addtext.onclick = function () {
  console.log(typeof inputContainer[0])
  console.log(listFooter)
  listFooter.textContent = inputContainer[0]
}
