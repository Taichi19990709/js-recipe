const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
//const addButton = document.getElementById("add-button")

inputElement.onkeydown = function (event) {
  if (event.key == "Enter") {
    const text = inputElement.value

    // card を作成
    const card = document.createElement("div")
    card.className = "card"

    // todo を作成
    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text

    // todo を card の中に追加する
    card.append(todo)

    // 削除ボタン を作成
    const deleteButton = document.createElement("div")
    deleteButton.className = "delete"

    // 削除ボタン を押したときの処理を登録
    deleteButton.onclick = function () {
      // カードを削除する
      card.remove()
    }

    // 削除ボタン を card の中に追加する
    card.append(deleteButton)

    // card を container の中に追加する

    // card を container の中に追加する
    container.append(card)

    // 入力欄を空にする
    inputElement.value = ""
  }
}
//addButton.onclick = function () {
// 入力欄の値（テキスト）をとりだして、 text にいれる
//const text = inputElement.value

// card を作成
//const card = document.createElement("div")
//card.className = "card"

// todo を作成
//const todo = document.createElement("div")
//todo.className = "todo"
//todo.textContent = text

// todo を card の中に追加する
//card.append(todo)

// 削除ボタン を作成
//const deleteButton = document.createElement("div")
//deleteButton.className = "delete"

// 削除ボタン を押したときの処理を登録
//deleteButton.onclick = function() {
// カードを削除する
//card.remove()}

// 削除ボタン を card の中に追加する
//card.append(deleteButton)

// card を container の中に追加する

// card を container の中に追加する
//container.append(card)

// 入力欄を空にする
//inputElement.value = ""}

const addBtn = document.getElementById("list-footer")
addBtn.onclick = function () {
  const inputArea = document.createElement("input")
  addBtn.appendChild(inputArea)
  inputArea.className = "input"
}

const unputElement = document.getElementByClassName("input")
const bontainer = document.getElementById("cards-container")

unputElement.onkeydown = function (event) {
  if (event.key == "Enter") {
    const text = unputElement.value

    // card を作成
    const card = document.createElement("div")
    card.className = "card"

    // todo を作成
    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text

    // todo を card の中に追加する
    card.append(todo)

    // 削除ボタン を作成
    const deleteButton = document.createElement("div")
    deleteButton.className = "delete"

    // 削除ボタン を押したときの処理を登録
    deleteButton.onclick = function () {
      // カードを削除する
      card.remove()
    }

    // 削除ボタン を card の中に追加する
    card.append(deleteButton)

    // card を container の中に追加する

    // card を container の中に追加する
    bontainer.append(card)

    // 入力欄を空にする
    unputElement.value = ""
  }
}
