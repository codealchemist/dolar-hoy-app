module.exports = `
function injectDiv (el) {
  // Create a new div element.
  var newDiv = document.createElement('div')

  newDiv.id = 'justRates'
  newDiv.style.position = 'fixed'
  newDiv.style.top = '0'
  newDiv.style.left = '0'
  newDiv.style.width = '100%'
  newDiv.style.height = '100%'
  newDiv.style.zIndex = '9999' // Ensures it's on top of other elements
  newDiv.style.backgroundColor = 'white'
  newDiv.style.color = 'black'
  newDiv.style.padding = '10px'
  newDiv.style.textAlign = 'center'
  newDiv.style.opacity = '0'
  newDiv.style.transition = 'opacity 2s'

  // Append passed element.
  newDiv.appendChild(el)

  // Append the div to the body or documentElement.
  document.body.appendChild(newDiv)

  // Fade in.
  newDiv.style.opacity = '1'
}
`
