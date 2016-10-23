const electron = require('electron')
const {app} = electron
const {BrowserWindow} = electron
let win

function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 800,
    'min-width': 500,
    'min-height': 200,
    'accept-first-mouse': true,
    'title-bar-style': 'hidden'
  })
  //win.setMenu(null);

  win.loadURL('file://' + __dirname + '/index.html')
  win.on('closed', function () {
    win = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (win === null) {
    createWindow()
  }
})
