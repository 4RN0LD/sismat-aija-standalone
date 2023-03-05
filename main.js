const { app, BrowserWindow } = require('electron')
require("./server.js")

function createWindow() {
    const win = new BrowserWindow({
        height: 800,
        width: 1200,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        // icon: path.join(__dirname, 'assets', 'img', 'icon.png'),
        title: 'SISMAT',
    });
    win.maximize();
    win.setTitle('SISTEMA MUNICIPAL DE ADMINISTRACION TRIBUTARIA - SISMAT');
    win.setMenuBarVisibility(false);
    win.loadURL("http://localhost:3000/#/")
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});