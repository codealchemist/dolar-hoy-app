require('v8-compile-cache')
const { app, BrowserWindow } = require('electron')
const scripts = require('./scripts')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    transparent: true,
    backgroundColor: '#000',
    icon: 'src/images/icon.png',
    show: false
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
      winLogo.show()
      winLogo.webContents.executeJavaScript(
        `document.querySelector('#logo').style.opacity = 1`
      )
      win.setTitle('Dolar Blue Rates')

      win.webContents.on('dom-ready', () => {
        setTimeout(() => {
          win.webContents.executeJavaScript(scripts)
          winLogo.webContents.executeJavaScript(
            `document.querySelector('#logo').style.opacity = 0`
          )
          setTimeout(() => {
            winLogo.hide()
            win.show()
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
