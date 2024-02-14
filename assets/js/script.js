"use strict"

// Utility functions
const display = (element, style = "block") => (element.style.display = style)
const hide = (element, style = "none") => (element.style.display = style)
const select = (selector) => document.querySelector(selector)

// by default this function generates array with 10 items ranging from 1 upto 100
const getRandomNumbers = function (n = 10, min = 1, max = 100) {
  const arr = []

  for (let i = 0; i < n; i++) {
    arr.push(Math.trunc(Math.random() * max) + min)
  }
  return arr
}

const getBars = (arr, max) => {
  const bars = arr.map((el) => {
    const height = (el * 400) / max
    return `<div class="bar ${
      el < 150 && "bar--current"
    }" style="height:${height.toFixed(2)}px"><span>${el}</span></div>`
  })
  return bars.reduce((acc, cur) => acc + cur)
}

// DOM Elements
const containerEl = select("#container")
const buttonEl = select("#button")
const paragraphEl = select("#paragraph")
const speedEl = select("#sorting-speed")
const sizeEl = select("#array-size")
const mainEl = select("#main")
const sectionEl = select("#section")
const loadingPage = select("#loading-page")
const arrayEl = select("#array-element")

// Event Listeners
buttonEl.addEventListener("click", function () {
  const arr = getRandomNumbers(10, 50, 2150)

  const max = arr.reduce((a, b) => Math.max(a, b), -Infinity)
  const maxTenth = Math.ceil(max / 10) * 10
  select("#value--max").textContent = maxTenth
  select("#value--middle").textContent = maxTenth / 2

  display(loadingPage)

  setTimeout(() => {
    select(".loading-page__heading").textContent = "Ready"

    setTimeout(() => {
      hide(mainEl)
      hide(loadingPage)
      display(sectionEl)
      arrayEl.textContent = `[${arr.join(", ")}]( size = ${arr.length} )`
    }, 500)
  }, 1000)

  select("#bars").insertAdjacentHTML("afterbegin", getBars(arr, maxTenth))
})

const init = function () {
  display(mainEl)
  hide(sectionEl)
}

// INITIALZE app
init()
