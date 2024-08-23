module.exports = `
(function setDarkLayer () {
  const $body = document.querySelector('body')
  if (!$body) return
  
  $body.style.filter = 'invert(1)'
  const div = document.createElement('div')
  div.id = 'darkLayer'
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
})()
`
