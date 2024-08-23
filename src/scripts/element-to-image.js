module.exports = `
function elementToImage(elementId, callback) {
  // Get the DOM element by its ID
  const element = document.getElementById(elementId)

  // Use html2canvas to capture the element and convert it to a canvas
  html2canvas(element).then(function(canvas) {
      // Convert the canvas to an image
      const imgData = canvas.toDataURL('image/png')

      // Create a new image element
      const imgElement = document.createElement('img')
      imgElement.src = imgData

      callback(imgElement)
  })
}
`
