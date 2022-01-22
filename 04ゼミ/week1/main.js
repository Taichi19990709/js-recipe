const fizzBuzz = function (number) {
  for (let n = 0; n <= 100; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log("FizzBuzz")
    } else if (n % 5 === 0) {
      console.log("Buzz")
    } else if (n % 3 === 0) {
      console.log("fizz")
    } else {
      console.log(n)
    }
  }
}

fizzBuzz(0)
