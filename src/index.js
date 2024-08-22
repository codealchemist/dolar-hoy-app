require('v8-compile-cache')
const { app, BrowserWindow } = require('electron')
const scripts = require('./scripts')
const dark = require('./scripts/dark')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    transparent: true,
    backgroundColor: '#000',
    icon: 'src/images/icon.png'
  })

  const winLogo = new BrowserWindow({
    width: 1920,
    height: 1080,
    backgroundColor: '#000',
    icon: 'src/images/icon.png'
  })

  win.on('move', () => {
    const [x, y] = win.getPosition()
    try {
      winLogo?.setPosition(x, y)
    } catch (e) {
      console.log('winLogo not ready')
    }
  })

  winLogo.on('move', () => {
    try {
      const [x, y] = winLogo?.getPosition()
      win.setPosition(x, y)
    } catch (e) {
      console.log('winLogo not ready')
    }
  })

  winLogo.loadFile('src/logo.html')
  win.loadURL('https://dolarhoy.com')
  win.on('ready-to-show', () => {
    try {
      win.setTitle('Dolar Blue Rates')

      win.webContents.executeJavaScript(dark)
      win.webContents.on('dom-ready', () => {
        setTimeout(() => {
          win.webContents.executeJavaScript(scripts)
          winLogo.webContents.executeJavaScript(
            `document.querySelector('#logo').style.opacity = 0`
          )
          setTimeout(() => {
            winLogo.hide()
          }, 1000 * 2)
        }, 1000)
      })
    } catch (e) {
      console.log('Oops!', e)
    }
  })
}

app.whenReady().then(() => {
  createWindow()
})
