module.exports = `
function loadHtml2Canvas (callback) {
  if (window.html2canvas) {
    console.log('html2canvas library has already been loaded.')
    callback()
    return
  }

  // Create a new script element
  var script = document.createElement('script')

  // Set the script's source to the html2canvas CDN
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'

  // Set the script to load asynchronously
  script.async = true

  // Append the script element to the head or body of the document
  document.head.appendChild(script)

  // Optional: You can add an onload event to execute code after the script loads
  script.onload = function () {
    console.log('html2canvas library has been loaded.')
    callback()
  }
}
`
