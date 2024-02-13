"use strict"

const generateButton = document.querySelector(".btn--generate")
const main = document.querySelector(".main")
const container = document.querySelector(".container")
const arrayEl = document.querySelector(".container p")
const bars = document.querySelector(".bars")
const arraySizeEl = document.querySelector("#array_size")

const init = function () {
  container.style.display = "none"
  main.style.display = "block"
}

// EVENT LISTENERS
generateButton.addEventListener("click", function () {
  main.style.display = "none"
  container.style.display = "block"

  const array_size = Number(arraySizeEl.value)

  // generate random Array with a size of 10
  const arr = generateRandomArray(array_size)
  arrayEl.innerHTML = `Array [${arr}]`

  const max = arr.reduce((a, b) => Math.max(a, b), -Infinity)
  const maxHeight = 30 // height of the maximum bar

  const barElements = arr
    .map((el) => {
      const height = Math.round((el * maxHeight) / max)
      return `<div class="bar bar--h-${height}" height=${height}><span>${el}</span></div>`
    })
    .reduce((acc, cur) => acc + cur)

  bars.insertAdjacentHTML("afterbegin", barElements)
})

const generateRandomArray = function (size) {
  const generatedArray = []
  for (let i = 0; i < size; i++) {
    generatedArray.push(Math.trunc(Math.random() * 100) + 1)
  }
  return generatedArray
}

// start the application
init()
