var {electron, ipcMain, app, BrowserWindow, globalShortcut, dialog} = require('electron')

app.allowRendererProcessReuse = false
var iconPath='';
var windowURL='';
var pathtermWindow='';
var pathmodalVar='';
var path = require('path');
var mainWindow, termWindow, factoryWindow, promptWindow, promptOptions, promptAnswer, htmlWindow, gamesWindow

//Función de creación de ventana principal
function createWindow() {


	if (process.platform=='win32'){
iconPath='./www/media/icon.png';
windowURL=path.join(__dirname, './www/index.html');
pathtermWindow=path.join(__dirname, "./www/term.html");
pathmodalVar=path.join(__dirname, "./www/modalVar.html");

	}
	if (process.platform=='linux'){
iconPath= path.join(__dirname, '/www/media/logo.png');
windowURL='file://' + __dirname + '/www/index.html';
pathtermWindow='file://' + __dirname + '/www/term.html';
pathmodalVar='file://' + __dirname + '/www/modalVar.html';
	}
	mainWindow = new BrowserWindow({width: 1000, height: 625, 
		icon:iconPath , frame: false, movable: true,
	//	icon: path.join(__dirname, '/www/media/logoCabecera.png')
webPreferences:{
	contextIsolation: false,
	nodeIntegration: true,
	nodeIntegrationInWorker: true,
	enableRemoteModule: true
}})
//Si es Windows y se ha hecho click en archivos de extensión x, estos se cargan
	if (process.platform == 'win32' && process.argv.length >= 2) {
		var file = process.argv[1]
		if (file.endsWith(".bloc")||file.endsWith(".ino")||file.endsWith(".py")) {
			mainWindow.loadURL(path.join(__dirname, './www/index.html?url='+file))
		}
        if (file.endsWith(".www")||file.endsWith(".html")) {
			mainWindow.loadURL(path.join(__dirname, './www/ffau.html?url='+file))
		}
		mainWindow.loadURL(windowURL);
	} else {
		console.log(process.platform);
		console.log("comando anterior: "+iconPath)
		console.log('comando: '+windowURL);
	mainWindow.loadURL(windowURL)
	}
	mainWindow.setMenu(null)
	mainWindow.on('closed', function () {
		mainWindow = null
	})
}
//Función de creación de consola
function createTerm() {
	termWindow = new BrowserWindow({width: 640, height: 560, 'parent': mainWindow, 
	webPreferences:{
		nodeIntegration:true,contextIsolation:false,enableRemoteModule:true
	},resizable: false, movable: true, frame: false, modal: true})
	termWindow.loadURL(pathtermWindow)
	termWindow.setMenu(null)
	termWindow.on('closed', function () {
		termWindow = null
	})
}
//Esta función parece replicar la de creación de consola
function createRepl() {
	termWindow = new BrowserWindow({width: 640, height: 515, 'parent': mainWindow,
	webPreferences:{
		nodeIntegration:true
	}, resizable: false, movable: true, frame: false, modal: true})
	termWindow.loadURL('file://' + __dirname + '/www/term.html')
	termWindow.setMenu(null)
	termWindow.on('closed', function () {
		termWindow = null
	})
}
//Creación de nuevos bloques (a eliminar)
function createfactory() {
	factoryWindow = new BrowserWindow({width: 1000, height: 625, 'parent': mainWindow, resizable: true, movable: true, frame: false})
	factoryWindow.loadURL('file://' + __dirname + '/www/factory.html')
	factoryWindow.setMenu(null)
	factoryWindow.on('closed', function () {
		factoryWindow = null
	})
}
//Creo que esta es la capa principal de la ventana
function createHTML() {
	htmlWindow = new BrowserWindow({width: 1000, height: 625,
		webPreferences:{
			nodeIntegration:true
		},
		 resizable: true, movable: true, frame: false})
	htmlWindow.loadURL('file://' + __dirname + '/www/fau.html')
	htmlWindow.setMenu(null)
	htmlWindow.on('closed', function () {
		htmlWindow = null
	})
}
function createGames() {
	gamesWindow = new BrowserWindow({width: 1000, height: 625, icon: '/www/media/gamepad.png',
	webPreferences:{
		nodeIntegration:true
	},
	 resizable: true, movable: true})
	gamesWindow.loadURL('file://' + __dirname + '/www/games/index.html')
	gamesWindow.on('closed', function () {
		gamesWindow = null
	})
}
function promptModal(options, callback) {
	promptOptions = options
	promptWindow = new BrowserWindow({width:360, height: 135, 'parent': mainWindow
	,webPreferences:{
		nodeIntegration:true,contextIsolation:false
	},
	 resizable: false, movable: true, frame: false, modal: true})
	promptWindow.loadURL(pathmodalVar);
	promptWindow.on('closed', function () {
		promptWindow = null
		callback(promptAnswer)
	})
}
function open_console(mainWindow = BrowserWindow.getFocusedWindow()) {
	if (mainWindow) mainWindow.webContents.toggleDevTools()
}
function refresh(mainWindow = BrowserWindow.getFocusedWindow()) {
	mainWindow.webContents.reloadIgnoringCache()
}
app.on('ready',  function() {
	createWindow()
	globalShortcut.register('F8', open_console)
	globalShortcut.register('F5', refresh)
})
app.on('activate', function() {
	if (mainWindow === null) createWindow()
})
app.on('window-all-closed', function() {
	globalShortcut.unregisterAll()
	if (mainWindow) {
		mainWindow.webContents.executeJavaScript('localStorage.setItem("loadOnceBlocks", "")')
		mainWindow.webContents.executeJavaScript('localStorage.setItem("pwd", "")')
	}
	if (htmlWindow) htmlWindow.webContents.executeJavaScript('localStorage.setItem("pwd", "")')
	if (process.platform !== 'darwin') app.quit()
})

ipcMain.on("prompt", function() {
	createTerm()
})
ipcMain.on("repl", function() {
	createRepl()
})
ipcMain.on("factory", function() {
	createfactory()
})
ipcMain.on("html", function() {
	createHTML()
})
ipcMain.on("games", function() {
	createGames()
})
ipcMain.on("appendBlock", function(event, data1, data2, data3) {
    mainWindow.webContents.send('BlockAppended', data1, data2, data3)
})
ipcMain.on("reload", function(event) {
	mainWindow.loadURL('file://' + __dirname + '/www/index.html')
})
ipcMain.on("openDialog", function(event, data) {
    event.returnValue = JSON.stringify(promptOptions, null, '')
})
ipcMain.on("closeDialog", function(event, data) {
	promptAnswer = data
})
ipcMain.on("modalVar", function(event, arg) {
	promptModal(
		{"label": arg, "value": "", "ok": "OK"},
	    function(data) {
	       event.returnValue = data
        }
	)
})
ipcMain.on('save-bin', function(event) {
	
	var archivo=dialog.showSaveDialog(mainWindow,{
		title: 'Exportar los binarios',
		defaultPath: 'Programa.hex',
		filters: [{ name: 'Binarios', extensions: ['hex']}]
	})
	.then(result=>{
	
		archivo=result.filePath;
		if (path.extname(archivo)==""){archivo=archivo+'.hex'}
		event.sender.send('saved-bin', archivo)
	})
})
ipcMain.on('save-png', function(event) {
	var archivo=dialog.showSaveDialog(mainWindow,{
		title: 'Guardar en formato.PNG',
		defaultPath: 'Captura',
		filters: [{ name: 'Images', extensions: ['png'] }]
	}
	).then(result=>{
		archivo=result.filePath;
		if (path.extname(archivo)==""){archivo=archivo+'.png'}
		event.sender.send('saved-png', archivo);

	})
})
ipcMain.on('save-png-html', function(event) {
	dialog.showSaveDialog(htmlWindow,{
		title: 'Guardar en formato .PNG',
		defaultPath: 'Captura',
		filters: [{ name: 'Images', extensions: ['png'] }]
	},
	function(filename){
		archivo=result.filePath;
		if (path.extname(archivo)==""){archivo=archivo+'.png'}
		event.sender.send('saved-png-html', archivo)
	})
})
ipcMain.on('save-png-factory', function(event) {
	dialog.showSaveDialog(factoryWindow,{
		title: 'Guardar en formato .PNG',
		defaultPath: 'Captura',
		filters: [{ name: 'Images', extensions: ['png'] }]
	},
	function(filename){
		event.sender.send('saved-png-factory', filename)
	})
})
ipcMain.on('save-ino', function(event) {
	 var archivo=dialog.showSaveDialog(mainWindow,{
		title: 'Guardar en formato.INO',
		defaultPath: 'Programa',
		filters: [{ name: 'Arduino', extensions: ['ino'] }]
	}).then(result=>{
		archivo=result.filePath;
		if (path.extname(archivo)==""){archivo=archivo+'.ino'}
		event.sender.send('saved-ino', archivo);

	});

})
ipcMain.on('save-py', function(event) {
	dialog.showSaveDialog(mainWindow,{
		title: 'Enregistrer au format .PY',
		defaultPath: 'Programme',
		filters: [{ name: 'Python', extensions: ['py'] }]
	},
	function(filename){
		event.sender.send('saved-py', filename)
	})
})
ipcMain.on('save-bloc', function(event) {

	var archivo=dialog.showSaveDialog(mainWindow,{
		title: 'Guardar el diagrama .BLOC',
		defaultPath: 'Programa',
		properties:[{showOverwriteConfirmation:'true'}],
		filters: [{ name: 'MasayloBlockly', extensions: ['bloc']}]
	}).then(result => {
		archivo=result.filePath;
		if (path.extname(archivo)==""){archivo=archivo+'.bloc'}

		event.sender.send('saved-bloc',archivo);

	}
)
event.sender.send('saved-bloc',archivo);
})
ipcMain.on('save-html', function(event) {
	dialog.showSaveDialog(htmlWindow,{
		title: 'Enregistrer au format .html',
		defaultPath: 'pageWeb.html',
		filters: [{ name: 'Web', extensions: ['html'] }]
	},
	function(filename){
		event.sender.send('saved-html', filename)
	})
})
ipcMain.on('save-www', function(event) {
	dialog.showSaveDialog(htmlWindow,{
		title: 'Enregistrer au format .www',
		defaultPath: 'pageWeb.www',
		filters: [{ name: 'Blockly-Web', extensions: ['www'] }]
	},
	function(filename){
		event.sender.send('saved-www', filename)
	})
})
ipcMain.on('save-bf', function(event) {
	dialog.showSaveDialog(factoryWindow,{
		title: 'Enregistrer au format .bf',
		defaultPath: 'Bloc.bf',
		filters: [{ name: 'Blockly-Factory', extensions: ['bf'] }]
	},
	function(filename){
		event.sender.send('saved-bf', filename)
	})
})
ipcMain.on('save-csv', function(event) {
	var archivo=dialog.showSaveDialog(mainWindow,{
		title: 'Guardar los datos en formato .CSV',
		defaultPath: 'Programa',
		filters: [{ name: 'donnees', extensions: ['csv'] }]
	}).then(result=> {
		archivo=result.filePath;
		if (path.extname(archivo)==""){archivo=archivo+'.csv'}
		event.sender.send('saved-csv', archivo);
	}
	)
})
ipcMain.on('addMedias', function(event) {
	dialog.showOpenDialog(htmlWindow,{
		title: 'Ajouter des médias (images, sons ou vidéos)',
		buttonLabel: "Ajouter",
		filters: [{ name: 'Médias', extensions: ['bmp', 'jpg', 'png', 'gif', 'mp3', 'mp4']}],
		properties: ['openFile','multiSelections']
	},
	function(filename){
		event.sender.send('addedMedias', filename)
	})
})
ipcMain.on('addImg', function(event) {
	dialog.showOpenDialog(factoryWindow,{
		title: 'Ajouter des images',
		buttonLabel: "Ajouter",
		filters: [{ name: 'Images', extensions: ['bmp', 'jpg', 'png', 'gif']}],
		properties: ['openFile','multiSelections']
	},
	function(filename){
		event.sender.send('added-img', filename)
	})
})
ipcMain.on('openBF', function(event) {
	dialog.showOpenDialog(factoryWindow,{
		title: 'Ouvrir',
		filters: [{ name: 'Blockly-Factory', extensions: ['bf'] }]
	},
	function(filename){
		event.sender.send('openedBF', filename)
	})
})



module.exports.open_console = open_console
module.exports.refresh = refresh
