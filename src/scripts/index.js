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
  const $darkLayer = document.querySelector('#darkLayer')
  setTimeout(() => {
    $darkLayer.style.opacity = '0'
  }, 2000)

  // No clicks.
  $body.style.pointerEvents = 'none'

  // Remove header and footer.
  const $header = document.querySelector('.header')
  const $footer = document.querySelector('.footer')
  $header?.remove()
  $footer?.remove()

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
