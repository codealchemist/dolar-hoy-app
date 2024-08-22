const elementToCanvas = require('./element-to-canvas')
const elementToImage = require('./element-to-image')
const injectDiv = require('./inject-div')

module.exports = `
${elementToCanvas}
${elementToImage}
${injectDiv}

function justRates () {
  const $body = document.querySelector('body')

  // Fade.
  const div = document.createElement('div')
  div.style.position = 'fixed'
  div.style.top = '0'
  div.style.left = '0'
  div.style.width = '100%'
  div.style.height = '100%'
  div.style.zIndex = '9999'
  div.style.backgroundColor = 'white'
  div.style.opacity = '1'
  div.style.transition = 'opacity 2s'
  document.body.appendChild(div)
  setTimeout(() => {
    div.style.opacity = '0'
  }, 2000)

  // No clicks.
  $body.style.pointerEvents = 'none'

  // Dark style.
  $body.style.filter = 'invert(1)'

  // Remove header and footer.
  document.querySelector('.header').remove()
  document.querySelector('footer').remove()

  elementToCanvas(() => {
    const $rates = document.querySelector('#home_0 .dolar')
    $rates.id = 'blueRates'
    elementToImage('blueRates', img => {
      injectDiv(img)
    })
  })
}

justRates()
`
