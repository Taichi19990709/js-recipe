const genkiFunction = function () {
  for (let n = 1; n <= 24; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!!!")
    } else {
      console.log(n)
    }
  }
}

genkiFunction(100)

const fizzBuzz = function (m) {
  for (let n = 0; n <= m; n++) {
    if (n % 15 === 0) {
      console.log("fizBuzz")
    } else if (n % 3 === 0) {
      console.log("fizz")
    } else if (n % 5 === 0) {
      console.log("Buzz")
    } else if (n % 10 === 3 || (n > 30 && n < 40)) {
      console.log("!!!!!!")
    } else {
      console.log(n)
    }
  }
}

fizzBuzz(90)
