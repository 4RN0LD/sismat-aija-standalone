const { app, BrowserWindow, shell } = require('electron');
const { autoUpdater } = require('electron-updater');
require("./server.js");

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
    win.hide();
    win.setTitle('SISTEMA MUNICIPAL DE ADMINISTRACION TRIBUTARIA - SISMAT');
    win.setMenuBarVisibility(true);
    win.loadURL("http://localhost:3000/#/login");
    shell.openExternal("http://localhost:3000/#/login");
    autoUpdater.checkForUpdatesAndNotify();
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