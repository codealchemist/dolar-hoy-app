const loadHtmlCanvas = require('./load-html-canvas')
const elementToImage = require('./element-to-image')
const injectDiv = require('./inject-div')
const injectStyles = require('./inject-styles')

module.exports = `
${loadHtmlCanvas}
${elementToImage}
${injectDiv}
${injectStyles}

function justRates () {
  const $body = document.querySelector('body')

  // Fade.
  const $darkLayer = document.querySelector('#darkLayer')
  setTimeout(() => {
    if ($darkLayer) $darkLayer.style.opacity = '0'
  }, 2000)

  // No clicks.
  $body.style.pointerEvents = 'none'

  // Remove header and footer.
  const $header = document.querySelector('.header')
  const $footer = document.querySelector('.footer')
  $header?.remove()
  $footer?.remove()

  loadHtmlCanvas(() => {
    const $rates = document.querySelector('#home_0 .dolar')
    if (!$rates) return
    $rates.id = 'blueRates'
    elementToImage('blueRates', img => {
      injectDiv(img)
    })
  })
}

function justRatesHtml () {
  const styles = \`
    html, body {
      margin: 0;
      height: 100% !important;
      overflow: hidden !important;
      pointerEvents: none;
    }

    #home_0 .dolar {
      position: absolute;
      scale: 1.5;
      z-index: 9999;
      background: white;
      top: 50%;
      bottom: 50%;
      left: 0;
      right: 0;
      margin: auto;
    }

    #home_0::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background: white;
      z-index: 1000;
      opacity: 1;
      width: 100vw;
      height: 100vh;
    }
  \`

  injectStyles(styles)
}

justRatesHtml()
`
