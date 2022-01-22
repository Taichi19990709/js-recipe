const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
let count = 0

plusButton.onclick = function () {
  // ここにクリック後の処理を書く
  count += 1
  display.textContent = count
}
