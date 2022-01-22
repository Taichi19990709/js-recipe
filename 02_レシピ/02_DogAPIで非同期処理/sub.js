const cocktails = document.getElementById("cocktails")
const button = document.getElementById("button")

button.onclick = function () {
  fetch("www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      cocktails.src = data.message
    })
}
