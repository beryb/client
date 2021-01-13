const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    kiosk: true,
    autoHideMenuBar: true,
  })

  win.loadURL(process.env.APP_URL)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})