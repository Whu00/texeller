const { app, BrowserWindow, Menu } = require('electron')
const path = require('node:path')

const createWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
	})
	mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
	createWindow()
	const mainMenu = Menu.buildFromTemplate(menu)
	Menu.setApplicationMenu(mainMenu)

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

const menu = [
	{
		label: 'File',
		submenu: [
			{
				label: 'New',
			},
			{
				label: 'Open',
			},
			{
				label: 'Save',
			},
			{
				label: 'Save As',
			},
			{
				label: 'Export',
			},
			{
				label: 'Exit',
			},
		],
	},
	{
		label: 'Edit',
		submenu: [
			{
				label: 'Undo',
			},
			{
				label: 'Redo',
			},
			{
				label: 'Cut',
			},
			{
				label: 'Copy',
			},
			{
				label: 'Paste',
			},
			{
				label: 'Delete',
			},
			{
				label: 'Select All',
			},
			{
				label: 'Settings',
			},
		],
	},
	{
		label: 'Image',
		submenu: [
			{
				label: 'Resize',
			},
			{
				label: 'Rotate',
			},
			{
				label: 'Flip',
			},
		],
	},
	{
		label: 'View',
		submenu: [
			{
				label: 'Zoom In',
			},
			{
				label: 'Zoom Out',
			},
		],
	},
	{
		label: 'Layers',
		submenu: [
			{
				label: 'New layer',
			},
			{
				label: 'Delete layer',
			},
			{
				label: 'Unite layers',
			},
		],
	},
	{
		label: 'Help',
		submenu: [
			{
				label: 'Help',
			},
			{
				label: 'About',
			},
		],
	},
]

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})
