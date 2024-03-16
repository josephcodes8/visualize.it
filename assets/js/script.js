"use strict"

// Utility functions
const display = (element, style = "block") => (element.style.display = style)
const hide = (element, style = "none") => (element.style.display = style)
const select = (selector) => document.querySelector(selector)

const getRandomNumbers = function (n = 10, min = 1, max = 100) {
  /* 
    Descirption: returns array of size `n` ranging between `min` and `max`
    
    @param {number} n      = number of  generated numbers @default = 10 
    @param {number} min    = the minmum number to be generated @default = 1
    @param {number} max    = the maximum number to be generated @default = 100 

    @returns [array]       = array of `n` number between `min` and `max`   
  */

  const arr = []

  for (let i = 0; i < n; i++) {
    arr.push(Math.trunc(Math.random() * max) + min)
  }
  return arr
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

let max, maxTenth, arr

const renderBars = (arr, max, currentItems = []) => {
  select("#bars").innerHTML = ""
  const bars = arr.map((el, index) => {
    const height = (el * 400) / max
    return `<div class="bar ${
      index === currentItems[0] || index === currentItems[1]
        ? "bar--current"
        : ""
    }" style="height:${height.toFixed(2)}px"><span>${el}</span></div>`
  })
  return bars.reduce((acc, cur) => acc + cur)
}

const showInitalArray = function (array) {
  hide(mainEl)
  hide(loadingPage)
  display(sectionEl)
  arrayEl.textContent = array
}

const init = function () {
  display(mainEl)
  hide(sectionEl)
}

// INITIALZE app
init()

// Event Listeners
buttonEl.addEventListener("click", function () {
  const arraySize = Number(sizeEl.value) // get the array size to be generated
  const selectedAlgorithm = select(".input--radio:checked").value // get the selected sorting algorithm
  const sortingSpeedInMS = speedEl.value * 1000 // get the sorting speed in milli seconds

  arr = getRandomNumbers(arraySize)

  // calcualte the next multiple of 10 of the maximum number generated in the array
  const max = arr.reduce((a, b) => Math.max(a, b), -Infinity)
  const maxTenth = Math.ceil(max / 10) * 10

  // set the `middle-number` and `max-number` in the bar
  select("#value--max").textContent = maxTenth
  select("#value--middle").textContent = maxTenth / 2

  display(loadingPage)

  setTimeout(() => {
    select(".loading-page__heading").textContent = "Ready"
    select(
      "#algorithm-name"
    ).textContent = `${selectedAlgorithm[0].toUpperCase()}${selectedAlgorithm
      .slice(1)
      .toLowerCase()} Sort`

    setTimeout(() => {
      showInitalArray(`[${arr.join(", ")}]( size = ${arr.length} )`)
      setTimeout(() => {
        window[selectedAlgorithm + "Sort"](arr, sortingSpeedInMS) // call the selected algorithm dynamically
      }, 1000)
    }, 500)
  }, 1000)

  select("#bars").insertAdjacentHTML(
    "afterbegin",
    renderBars(arr, maxTenth, [1, 0])
  )
})

//  SORTING ALGORITHMS
var insertionSort = function (arr, sortingSpeedInMS) {}

var selectionSort = function (sortingSpeedInMS) {
  console.log(sortingSpeedInMS)
  console.log("Selection Sort is being done.")
}

var mergeSort = function (sortingSpeedInMS) {
  console.log(sortingSpeedInMS)
  console.log("Merge Sort is being done.")
}

var quickSort = function (sortingSpeedInMS) {
  console.log(sortingSpeedInMS)
  console.log("Quick Sort is being done.")
}

var bubbleSort = function (sortingSpeedInMS) {
  console.log(sortingSpeedInMS)
  console.log("Bubble Sort is being done.")
}

var heapSort = function (sortingSpeedInMS) {
  console.log(sortingSpeedInMS)
  console.log("Heap Sort is being done.")
}
