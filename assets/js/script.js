"use strict"

// Utility functions
const display = (element, style = "block") => (element.style.display = style)
const hide = (element, style = "none") => (element.style.display = style)
const select = (selector) => document.querySelector(selector)

// DOM Elements
const containerEl = select("#container")
const buttonEl = select("#button")
const paragraphEl = select("#paragraph")
const speedEl = select("#sorting-speed")
const sizeEl = select("#array-size")
const mainEl = select("#main")
const sectionEl = select("#section")
const loadingPage = select("#loading-page")

// Event Listeners
buttonEl.addEventListener("click", function () {
  display(loadingPage)
  setTimeout(() => {
    select(".loading-page__heading").textContent = "Ready"
    setTimeout(() => {
      hide(mainEl)
      hide(loadingPage)
      display(sectionEl)
    }, 500)
  }, 1000)
})

const init = function () {
  display(mainEl)
  hide(sectionEl)
}

// INITIALZE app
init()
