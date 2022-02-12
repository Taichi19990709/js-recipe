// const elementId = document.getElementById("elementId")
// const element = document.getElementById("element")
// console.dir(element)

const element = document.getElementById("element")

console.log(element.textContent) // 'ぼく、要素!'

element.textContent = "変えたよ!"

const button = document.getElementById("add-button")

const alertMessage = function () {
  alert("クリックしたね")
}

// 関数を登録
button.onclick = alertMessage

const card = document.createElement("div") // <div></div>
card.className = "card" // <div class="card></div>
card.textContent = "こんばんは" // <div class="card>こんばんは</div>
