const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    kiosk: true,
    autoHideMenuBar: true,
  })

  win.loadURL('https://bb.soldo.dev')
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