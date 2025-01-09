var {electron, ipcMain, app, BrowserWindow, globalShortcut, dialog,clipboard} = require('electron')

app.allowRendererProcessReuse = false
var iconPath='';
var windowURL='';
var pathtermWindow='';
var pathmodalVar='';
var path = require('path');
var mainWindow, termWindow, factoryWindow, promptWindow, promptOptions, promptAnswer, htmlWindow, gamesWindow;
const { SerialPort } = require('serialport')
var sp = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline');
var parser='';
var puerto='';
var fs = require('fs')
var fs2 = require("fs-extra");
var { exec } = require('child_process')
const homedir = require('os').homedir();
const extract = require('extract-zip');
var chemin = process.resourcesPath;
var dir='';
var dirVersion='';
var appVersion=app.getVersion();
var puertosDetectados=0;
const fsExtra = require('fs-extra'); // fs-extra soporta promesas
	var puertosPrevios = [];

	async function monitorizaPuertos() {
		setInterval(async () => {
		  try {
			const puertos = await SerialPort.list();
			const nuevosPuertos = [];
	  
			// Filtrar solo los puertos con vendorId
			const puertosConVendorId = puertos.filter((port) => port.vendorId);
	  
			// Detectar si hay cambios en los puertos conectados
			const hayCambios =
			  puertosConVendorId.length !== puertosPrevios.length ||
			  puertosConVendorId.some(
				(port) => !puertosPrevios.some((prevPort) => prevPort.path === port.path)
			  );
	  
			if (hayCambios) {
			  console.log("Hubo cambios:");
	  
			  // Identificar nuevos puertos
			  puertosConVendorId.forEach((port) => {
				const yaExiste = puertosPrevios.some((prevPort) => prevPort.path === port.path);
				if (!yaExiste) {
				  nuevosPuertos.push(port);
				}
			  });
	  
			  // Colocar los nuevos puertos al inicio y actualizar `puertosPrevios`
			  puertosPrevios = [...nuevosPuertos, ...puertosPrevios.filter((prevPort) =>
				puertosConVendorId.some((port) => port.path === prevPort.path)
			  )];
	  
			  // Enviar los cambios al renderer
			  mainWindow.webContents.send('tomaPuertos', puertosPrevios);
			}
		  } catch (err) {
			console.error('Error al listar los puertos:', err);
		  }
		}, 1000);
	  }
	  
	  
ipcMain.on("damePuertos",(event)=>{
	mainWindow.webContents.send("tomaPuertos",puertosPrevios);
})
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
	mainWindow = new BrowserWindow({width: 1400, height: 900, 
		icon:iconPath , frame: false, movable: true,
	//	icon: path.join(__dirname, '/www/media/logoCabecera.png')
webPreferences:{
	preload:path.join(__dirname, '/preload.js'),
	contextIsolation: true,
	nodeIntegration: false,
	nodeIntegrationInWorker: true,
	enableRemoteModule: true
}});


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
	//	console.log(process.platform);
	//	console.log("comando anterior: "+iconPath)
	//	console.log('comando: '+windowURL);
	mainWindow.loadURL(windowURL)
	}
	mainWindow.setMenu(null)
	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
		mainWindow.webContents.send("marcaVersion",appVersion);
		monitorizaPuertos();
	  });
	mainWindow.on('closed', function () {
		mainWindow = null
	});


}

//Función de creación de consola
function createTerm() {
	termWindow = new BrowserWindow({width: 640, height: 560, 'parent': mainWindow, 
	webPreferences:{
		preload:path.join(__dirname, '/preload.js'),
		contextIsolation: true,
		nodeIntegration: false,
		nodeIntegrationInWorker: true,
		enableRemoteModule: true
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

ipcMain.on("prompt", function(puerto) {
	createTerm()
})
ipcMain.on("abrePuertoSerie",(event,puertoEnviado)=>{
		puerto = new SerialPort({
		path: puertoEnviado.path,
		baudRate: parseInt(puertoEnviado.baud,10),
		autoOpen: false, // Configurado para abrir manualmente
	  });
	  		const parser = puerto.pipe(new ReadlineParser({ delimiter: '\r\n' }))
			  parser.on('data', function(data){
				console.log(data);
				termWindow.webContents.send("leerDatosSerie",data);
			  });
	  // Manejo de eventos
	  puerto.open((err) => {
		if (err) {
		  return console.error(`Error al abrir el puerto: ${err.message}`);
		}
		console.log(`Puerto ${puertoEnviado.path} abierto a ${puertoEnviado.baud} baudios`);
	  });
	  
})
ipcMain.on("cierraPuertoSerie",(event)=>{
	console.log("Cerrando puerto...");
	if (puerto.isOpen){
		console.log("Cerrando puerto que estaba abierto...");
		puerto.close();

	}
})
ipcMain.on("escribirPuertoSerie",(event,datos)=>{
	console.log("datos: "+datos);
	if (puerto.isOpen){
		puerto.write(datos);
	}
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
function promptModal(options, callback) {
	console.log("Llamando a modal...");
	promptOptions = options
	console.log("Options en promptModal: "+JSON.stringify(promptOptions));
	promptWindow = new BrowserWindow({width:800, height: 600, 'parent': mainWindow
		,webPreferences:{
			preload:path.join(__dirname, '/preload.js'),
			contextIsolation: true,
			nodeIntegration: false,
			nodeIntegrationInWorker: true,
			enableRemoteModule: true
		},
	 resizable: true, movable: true, frame: false, modal: true})
	promptWindow.loadURL(pathmodalVar);
	promptWindow.on('closed', function () {
		promptWindow = null
		callback(promptAnswer)
	})
}
ipcMain.handle("openDialog", async(event, data)=> {
	console.log("Llamando a openDialog...");
	console.log(JSON.stringify(promptOptions, null, ''))
	console.log(data);

	return JSON.stringify(promptOptions, null, '')

	
})
ipcMain.on("closeDialog", function(event, data) {
	console.log("Recibiendo nombre variable..."+data);
	promptAnswer = data;
	mainWindow.webContents.send("createVariable", data);
})
// Función modificada desde la versión 2.0
ipcMain.on("modalVar", function(event, arg) {
	console.log("Recibiendo: "+arg)
	promptModal(
		{"label": arg, "value": "", "ok": "OK"},
	    function(data) {
			console.log("Data en callback: "+data);
	       event.returnValue = data
        }
	)
}) 
	/* ipcMain.handle("modalVar", async (event, arg) => {
		console.log("Recibiendo: " + arg);
		
		// Devuelve una Promise que se resuelve cuando se recibe la respuesta
		return new Promise((resolve) => {
		  promptModal(
			{ "label": arg, "value": "", "ok": "OK" },
			function(data) {
			  resolve(data); // Resuelve la Promise con el valor ingresado
			}
		  );
		});
	  }); */
	  
ipcMain.on('save-bin', function(event,tarjeta) {
	var archivo=dialog.showSaveDialog(mainWindow,{
		title: 'Exportar los binarios',
		defaultPath: 'Programa.hex',
		filters: [{ name: 'Binarios', extensions: ['hex']}]
	})
	.then(result=>{
	
		archivo=result.filePath;
		if (path.extname(archivo)==""){archivo=archivo+'.hex'}
		console.log("Archivo: "+archivo);
		console.log("Homedir: "+homedir);
		var res=archivo.split(".");
		try{
		fs.copyFileSync(homedir+'/.masaylo/arduino/sketch/build/arduino.avr.'+tarjeta+'/sketch.ino.with_bootloader.hex', res[0]+'_with_bootloader.hex');
		fs.copyFileSync(homedir+'/.masaylo/arduino/sketch/sketch.ino', res[0]+'.ino');
		fs.copyFileSync(homedir+'/.masaylo/arduino/sketch/build/arduino.avr.'+tarjeta+'/sketch.ino.hex', res[0]+'.hex');
	}
		catch (error){
			mainWindow.webContents.send("errorEncontrado",error)

		}
	})
})
ipcMain.on('save-png', function(event,data) {
	var archivo=dialog.showSaveDialog(mainWindow,{
		title: 'Guardar en formato.PNG',
		defaultPath: 'Captura',
		filters: [{ name: 'Images', extensions: ['png'] }]
	}
	).then(result=>{
		archivo=result.filePath;
		if (path.extname(archivo)==""){archivo=archivo+'.png'}
		try{
		fs.writeFileSync(archivo,data,'base64');
		}
		catch (error){
			mainWindow.webContents.send('errorEncontrado',error);
		}
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
ipcMain.on('save-bloc', async (event, code) => {
  
	const result = await dialog.showSaveDialog({
	  title: 'Guardar el diagrama .BLOC',
	  defaultPath: 'Programa',
	  properties: ['showOverwriteConfirmation'],
	  filters: [{ name: 'MasayloBlockly', extensions: ['bloc'] }]
	});
  
	if (!result.canceled && result.filePath) {
	  let archivo = result.filePath;
  
	  if (path.extname(archivo) === "") {
		console.log("Faltaba extensión");
		archivo = archivo + '.bloc';
	  }
  
	  try {
		fs.writeFileSync(archivo, code);
  
		const fileName = path.basename(archivo,path.extname(archivo));
		mainWindow.webContents.send('saved-bloc', fileName);
	  } catch (error) {
		console.error("Error al guardar el archivo:", error);
	  }
	} else {
	  console.log("Diálogo cancelado por el usuario.");
	}
  });
ipcMain.on('save-ino', async(event,code) =>{
	 const result=await dialog.showSaveDialog(mainWindow,{
		title: 'Guardar en formato.INO',
		defaultPath: 'Programa',
		filters: [{ name: 'Arduino', extensions: ['ino'] }]
	})

	if (!result.canceled && result.filePath) {
		let archivo = result.filePath;
	
		if (path.extname(archivo) === "") {
		  console.log("Faltaba extensión");
		  archivo = archivo + '.ino';
		}
	
		try {
		  fs.writeFileSync(archivo, code);
	
		  const fileName = path.basename(archivo,path.extname(archivo));
		  mainWindow.webContents.send('saved-ino', fileName);
		} catch (error) {
		  console.error("Error al guardar el archivo:", error);
		  mainWindow.webContents.send("errorEncontrado",error);
		}
	  } else {
		console.log("Diálogo cancelado por el usuario.");
	  }

	});
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
ipcMain.on('save-csv', function(event,code) {
	var archivo=dialog.showSaveDialog(mainWindow,{
		title: 'Guardar los datos en formato .CSV',
		defaultPath: 'Programa',
		filters: [{ name: 'donnees', extensions: ['csv'] }]
	}).then(result=> {
		archivo=result.filePath;
		if (path.extname(archivo)==""){archivo=archivo+'.csv'}
		try {
			fs.writeFileSync(archivo, code);
	  
			const fileName = path.basename(archivo,path.extname(archivo));
			mainWindow.webContents.send('saved-ino', fileName);
		  } catch (error) {
			console.error("Error al guardar el archivo:", error);
			mainWindow.webContents.send("errorEncontrado",error);
		  }
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
//Rutinas de instalación
ipcMain.on("compruebaInstalacion",()=>{
	console.log("Comprobando instalacion");
	if(process.platform=="linux"){
		console.log("Comprobando en linux...");
		var dirVersion=homedir+'/.masaylo/'+appVersion;
		dir=homedir+'/.masaylo/';
		 
	}
	if (process.platform=="win32"){
		console.log("Comprobando en Windows");
		 dir=require('os').homedir()+'\\.masaylo';
		 dirVersion=dir+'\\'+appVersion;
	}
	console.log("Comprobando si existe el archivo "+dirVersion);
	if (!fs.existsSync(dirVersion)){
		console.log ("Hay que instalar");
		mainWindow.webContents.send("avisaInstalacion");
	}else{
		console.log("Ya esta instalado");
		compilaPrograma();
	}
				});
function compilaPrograma(){
	mainWindow.webContents.send("dameSketch");
				}
ipcMain.on("verificar",()=>{
	console.log("Vamos a verificar");
	//compruebaInstalacion();
})
ipcMain.on("tomaSketch",function(event,data){
	console.log("Directorio dir: "+dir);
	if (data.verif=='false'||data.verif==undefined){
	try{
fs.writeFileSync(dir+'/arduino/sketch/sketch.ino', data.programa);
console.log("Datos copiados, instalacion: "+data.instalando);

if (process.platform=="linux"){
	exec('./verify.sh ' + data.type+' '+data.micro+' '+data.build, {cwd: dir+'/arduino/'}, function(err, stdout, stderr){
		if (err) console.log('err0r: '+data.card +", "+err);
		if (stderr) {

			if (data.card=="esp8266"){
				if (stderr.includes("Executable segment sizes:")){
				console.log("Unattended error message... Ignoring it");
				console.log(stdout.toString())
				//localStorage.setItem('detail', stdout.toString());
				//itsOK(0);
				return;
			}
					
					} 
			fs.realpath(dir+'/arduino/sketch/sketch.ino' , function(err, path){

				var erreur = stderr.toString().replace("exit status 1","")
				var error = erreur.replace(/error:/g,"").replace(/token/g,"")
				var errors = error.split(path)
				mainWindow.webContents.send("enviaErrores",errors);
				//messageDiv.style.color = '#ff0000'
				//messageDiv.innerHTML = "ERROR DE COMPILACIÓN"
			//messageDiv.innerHTML = ""
				//errors.forEach(function(e){
			//		messageDiv.innerHTML += e + "<br>"+carte+"<br>"
			//	})
			//	btn_close_message.style.display = "inline"
			})
			return
		}
		//localStorage.setItem('detail', stdout.toString())
		//itsOK(0)
		console.log("Mensaje de compilacion: "+stdout.toString());
		mainWindow.webContents.send("programaCompilado",stdout.toString());
		if (data.instalando=='true'){
			grabarPrograma(data);
		}
	});
}	
if (process.platform=="win32"){
	var caminosketch = path.join(dir, 'arduino', 'sketch');

// Verificar que `data.card` y `caminosketch` tengan valores válidos
if (!data.carte || !caminosketch) {
    console.error("Error: Parámetros faltantes. data.card o caminosketch no están definidos.");
    return;
}

// Ejecutar verifica.bat con parámetros
console.log(path.join(homedir,'.masaylo','arduino'));
var caminosketch = path.join(dir,'arduino','sketch','sketch.ino');
console.log(caminosketch)
exec(`verifica.bat ${data.type} ${data.micro} ${data.build} ${caminosketch}`, { cwd: path.join(homedir, '.masaylo','arduino') }, function (err, stdout, stderr) {
    if (err) {
        console.log('err0r: ' + data.card + ", " + err);
		mainWindow.webContents.send("errorEncontrado",err);
        return;
    }
    if (stderr) {
        console.log("Aqui esta el error: " + stderr.toString());
        // Manejo del error específico para ESP8266
        if (data.card == "esp8266" && stderr.includes("Executable segment sizes:")) {
            console.log("Unattended error message... Ignoring it");
            console.log(stdout.toString());
            return;
        }
        // Analizar errores para otras tarjetas
        fs.realpath(path.join(homedir,'.masaylo', 'arduino', 'sketch', 'sketch.ino'), function (err, realPath) {
            if (err) {
                console.error("Error obteniendo la ruta real:", err);
                return;
            }
            var errors = stderr.toString()
                .replace("exit status 1", "")
                .replace(/error:/g, "")
                .replace(/token/g, "")
                .split(realPath);
            mainWindow.webContents.send("enviaErrores", errors);
        });
        return;
    }
    console.log("Mensaje de compilación: " + stdout.toString());
    mainWindow.webContents.send("programaCompilado", stdout.toString());
    if (data.instalando == 'true') {
        grabarPrograma(data);
    }
});

}

}catch(err){
		console.log("Error copiando sketch: "+err);
	}
}else{
	console.log("ya se había compilado...");
	console.log("Toca instalar. Data.instalando: "+data.instalando);
	if (data.instalando=='true'){
		console.log("Toca grabar");
		mainWindow.webContents.send("instalarPrograma")

	grabarPrograma(data);
	}else{
		console.log("No me llega la orden de grabar")
		console.log(data.instalando);
		mainWindow.webContents.send("programaCompilado",'yaCompilado');

	}
}
})
function grabarPrograma(data){
	console.log('grabando hex');
	if (process.platform=='linux'){
	var dir2=homedir+('/.masaylo/arduino/flash.sh ');
	console.log("type: "+data.type+"micro: "+data.micro+" build: "+data.build+", cpu: "+data.cpu);

	exec(dir2 +' '+ data.com+ ' ' +' '+data.type+' '+data.micro+' '+ data.build +' '+data.cpu, {cwd: homedir+'/.masaylo/arduino'} , function(err, stdout, stderr){
		console.log("Puerto: "+data.com)
		var erreur = stderr.toString().replace(/##################################################/g,"").replace(/|/g,"")
		var errors = erreur.split("avrdude:")
		//localStorage.setItem('detail', errors)
		if (err) {
			console.log('error flasheando');
			console.log(err);
			mainWindow.webContents.send("errorEncontrado",err);
			return
		}
		console.log(stdout.toString());
		mainWindow.webContents.send("programaGrabado",stdout.toString());

	})
}
if (process.platform=='win32'){
	var caminosketch = path.join(dir, 'arduino', 'sketch');
	console.log("caminosketch: " + caminosketch);
	var puertoGrabar=data.com;
	// Verificar que `data.card` y `caminosketch` tengan valores válidos
	if (!data.carte || !caminosketch) {
		console.error("Error: Parámetros faltantes. data.card o caminosketch no están definidos.");
		return;
	}
	
		exec(`graba.bat ${data.com} ${data.carte} ${caminosketch}`, {cwd: path.join(homedir, '.masaylo','arduino')} , function(err, stdout, stderr){
			console.log("Puerto: "+data.com)
			var erreur = stderr.toString().replace(/##################################################/g,"").replace(/|/g,"")
			var errors = erreur.split("avrdude:")
			//localStorage.setItem('detail', errors)
			if (stderr){
				console.log("Error grabando en windows: "+errors);
				mainWindow.webContents.send('enviaErrores',errors);
				return
			}
			if (err) {
				console.log('error flasheando');
				console.log(err);
				mainWindow.webContents.send("errorEncontrado",err);
				return
			}
			console.log(stdout.toString());
			mainWindow.webContents.send("programaGrabado",stdout.toString());
});
}
}
ipcMain.on("empiezaInstalacion",()=>{
	(async () => {
		await creaMasaylo();
		await copiaArchivosCompilacion();
		await extraeLibrerias();
		await actualizaTarjetasArduino();
	})();
		
});
async function creaMasaylo() {




    try {
        // Elimina el directorio si existe
        if (await fsExtra.pathExists(dir)) {
            console.log("Borrando carpeta anterior " + dir);
            await fsExtra.remove(dir); // Usa fsExtra para eliminar
        }

        // Crea el directorio
        console.log("Creando directorio ./masaylo: "+dir);
		try{
		fs.mkdirSync(dir);
		fs.mkdirSync(path.join(dir,'drivers'));
		console.log('1. directorio creado correctamente: ');
			}catch (err){
			console.log("Error creando carpeta ./masaylo: "+err);
		}
        // Escribe el archivo de versión
		var dir2;
		if (process.platform=='win32'){
			 dir2=dir+'\\'+appVersion;
		}
		if (process.platform=='linux'){
			dir2=dir+'/'+appVersion;

		}
        console.log("2.Copiando archivo appVersion a " + dir2);
         fs.writeFileSync(dir2, appVersion); // Usa await con fs.promises.writeFile
        console.log("Archivo de versión " + appVersion + " creado");

        // Copia los archivos de compilación
        console.log("Iniciando copia de archivos de compilación...");


        console.log("Proceso creaMasaylo completado.");
    } catch (err) {
        console.error("Error en creaMasaylo: " + err.message);
		mainWindow.webContents.send("errorEncontrado","Error en creaMasaylo: "+err);
		return
    }
}
async function copiaArchivosCompilacion(){
	var fuente;
	console.log("__dirname: "+__dirname);
	if (process.platform=='win32'){
		fuente=__dirname+('\\compilation\\'); 
	}
	if (process.platform=='linux'){
		fuente=__dirname+('/compilation/'); 

	}

try{
	console.log("Copiando los archivos de "+fuente+" a "+dir);
	fs.cpSync(fuente, dir,{recursive:true});
	fs.cpSync(path.join(__dirname,'drivers'),path.join(dir,'drivers'),{recursive:true});

	console.log("3.Copiados los archivos");
	mainWindow.webContents.send("archivosCopiados");

}catch(err){
	console.error("Error en copiaArchivos: "+err.message);
	mainWindow.webContents.send("errorEncontrado","Error en copiaArchivos: "+err);
	return
}
}
async function extraeLibrerias(){
	var source;
	if (process.platform=='win32'){
		 source=__dirname+'\\compilation\\arduino\\libraries.zip';
	}
	if (process.platform=='linux'){
		source=__dirname+'/compilation/arduino/libraries.zip';

	}
	try {
		console.log('4. iniciando extracción a '+homedir);
		 extract(source, { dir: homedir+'/Arduino/libraries' },function(err,stdout){
			 if (err){
				 console.log(err);
				 mainWindow.webContents.send("errorEncontrado","Error creando librerias: "+err);
				return
			 }else{
				//console.log(stdout);
			mainWindow.webContents.send('libreriasExtraidas');

			 }
		
		 })
	
		
	
	  } catch (err) {
		// handle any errors
		console.log(err);
		mainWindow.webContents.send("errorEncontrado",err);
		return
	  }
	 
	}
async function actualizaTarjetasArduino(){
	var caminoCli;
	if (process.platform=='win32'){
		caminoCli=dir+'\\arduino\\arduino-cli'
	}
	if (process.platform=='linux'){
		caminoCli=dir+'/arduino/arduino-cli'
	}
	console.log('directorio: '+caminoCli);
	const cliPath = path.resolve(caminoCli);

exec(`${cliPath} core update-index && ${cliPath} core install arduino:avr`, 
    { cwd: path.resolve(__dirname, 'compilation/arduino/') },
    (err, stdout, stderr) => {
        if (err) {
            console.error(`Error al ejecutar el comando: ${err.message}`);
			mainWindow.webContents.send("errorEncontrado","Error instalando tarjetas arduino: "+err);
            return;
        }
        if (stderr) {
            console.error(`Error estándar: ${stderr}`);
        }
        console.log(`Salida estándar:\n${stdout}`);
		mainWindow.webContents.send("todoInstalado");
    }
);


}
ipcMain.on("instalaIoT",()=>{
	var caminoCli;
	if (process.platform=='win32'){
		caminoCli=dir+'\\arduino\\arduino-cli'
	}
	if (process.platform=='linux'){
		console.log("dir en linux: ");
		caminoCli=dir+'arduino/arduino-cli'
	}
	console.log('directorio: ' + caminoCli);
	const cliPath = path.resolve(caminoCli);
	const initConfigCommand = `${cliPath} config init --overwrite --additional-urls https://arduino.esp8266.com/stable/package_esp8266com_index.json,https://dl.espressif.com/dl/package_esp32_index.json`;
	const updateIndexCommand = `${cliPath} core update-index`;
	const installCommands = [
		`${cliPath} core install esp8266:esp8266`,
		`${cliPath} core install esp32:esp32`
	].join(' && ');
	
	const fullCommand = `${initConfigCommand} && ${updateIndexCommand} && ${installCommands}`;
	
	exec(fullCommand, { cwd: __dirname + `/compilation/arduino/` }, function (err, stdout, stderr) {
		if (err) {
			console.log('error instalando esp8266/esp32: ' + err);
			mainWindow.webContents.send("errorEncontrado", err);
			return
		} 
		if (stderr){
			console.log("error stderr: "+stderr);
			return
		}else {
			console.log(stdout);
		}
	
	
	console.log(stdout);
mainWindow.webContents.send("IoTInstalado");
});
});
ipcMain.on('debug-message', (event, message) => {
	console.log('DEBUG:', message);
  });
  ipcMain.on('cierraVentana',(event)=>{
mainWindow.close();
  })
  ipcMain.on('minimizaVentana',(event)=>{
	mainWindow.minimize();
	  })
	 
	  ipcMain.on('maximizaVentana',(event)=>{
		if(mainWindow.isMaximized()){
			mainWindow.unmaximize()
			mainWindow.webContents.send('botonMaximiza')
		} else {
			mainWindow.maximize();
			mainWindow.webContents.send("botonRestaura")
		}		  })
ipcMain.on('copiaPortapapeles',(event,text)=>{
	clipboard.writeText(text)
})