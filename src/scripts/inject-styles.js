module.exports = `
/**
 * Utility function to add CSS in multiple passes.
 * @param {string} styleString
 */
function injectStyles(styleString) {
  const style = document.createElement('style')
  style.textContent = styleString
  document.head.append(style)
}
`
