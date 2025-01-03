		var checkBox = document.getElementById('verifyUpdate');
		var portserie = document.getElementById('portserie');
		var messageDiv = document.getElementById('messageDIV');
		var detailDiv = document.getElementById('detailDIV');
		var btn_detail = document.getElementById('btn_detail');
		var btn_close_message = document.getElementById('btn_close_message');
		var btn_verify = document.getElementById('btn_verify');
		var btn_saveXML = document.getElementById('btn_saveXML');
		btn_verify.title = Blockly.Msg.compile;
		var btn_flash = document.getElementById('btn_flash');
		btn_flash.title = Blockly.Msg.insertflash;
		var btn_bin = document.getElementById('btn_bin');
		btn_bin.title = Blockly.Msg.bin;
		document.getElementById('btn_max').innerHTML="<span class='fa fa-window-maximize fa-lg'></span>"
		//Añadido porque cuando se cargan ejemplos, a veces el select con los puertos com se pierden.
		document.addEventListener('DOMContentLoaded', () => {
			const selectElement = document.getElementById('puertoserie');
			if (!selectElement) {
				console.log("Se había borrado el select. Cargándolo de nuevo de puertos com...");
				window.api.enviar("damePuertos");
			}
		});
	

		  window.api.recibir('tomaPuertos',(puertosNuevos)=>{
			console.log("recibiendo puertos");
				portserie.innerHTML="";
			var opt = document.createElement('option')
			opt.value = "com"
			opt.text = Blockly.Msg.com1
			portserie.appendChild(opt);
			var i=0;
			puertosNuevos.forEach((port)=> {
				if (port.vendorId){
					i++;
					var opt = document.createElement('option')
					opt.value = port.path;
					opt.text = port.path;
					if (i==1){
						opt.selected=true;
						window.localStorage.com=opt.value
					}
					console.log("Puerto: "+opt.text);
					portserie.appendChild(opt);
					
				}
		  });
		  if (puertosNuevos.length>0){
		  //console.log("Primer puerto: "+puertosNuevos[0].path);
		  if (window.localStorage.getItem('com')==undefined||window.localStorage.getItem('com')=='com'){
			console.log("Cambiando com en localstorage: "+portserie.value);
			window.localStorage.setItem('com',portserie.value);
		  }
		}else{window.localStorage.setItem('com','com');}
		});
		//Fun
		window.api.recibir("avisaInstalacion", () => {
		  btn_close_message.style.display = "inline";
		  alert(Blockly.Msg.initInstall);
		  messageDiv.style.color = '#000000';
		  messageDiv.innerHTML = Blockly.Msg.installing + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>';
		  window.api.enviar("empiezaInstalacion");
		});
		window.api.recibir('archivosCopiados',()=>{
			alert ("Se han copiado los archivos necesarios para que MasayloBlockly pueda funcionar en tu ordenador. Ahora vamos a extraer las librerías necesarias para que Arduino funcione.");
			btn_close_message.style.display="inline";
		});
		window.api.recibir('libreriasExtraidas',()=>{
			alert("Se ha completado el proceso de extracción.");
			btn_close_message.style.display="inline";

		})
		window.api.recibir("todoInstalado",()=>{
			alert(Blockly.Msg.missionAcomplished);

if (confirm(Blockly.Msg.doYouWantIoT)){
	alert(Blockly.Msg.youMustWait);
	window.api.enviar("instalaIoT");
}else{
	messageDiv.innerHTML=Blockly.Msg.closeWindowandWait;
	btn_close_message.style.display="inline";
}
		})
		window.api.recibir("IoTInstalado",()=>{

		alert(Blockly.Msg.installFinished);
		messageDiv.innerHTML=Blockly.Msg.closeWindowandWait;
		btn_close_message.style.display="inline";

		})
		window.api.recibir("botonMaximiza",()=>{
			document.getElementById('btn_max').innerHTML="<span class='fa fa-window-maximize fa-lg'></span>"

		})
		window.api.recibir("botonRestaura",()=>{
			document.getElementById('btn_max').innerHTML="<span class='fa fa-window-restore fa-lg'></span>"

		})
		window.api.recibir('marcaVersion',(appVersion)=>{
			document.getElementById('span_title2').textContent = appVersion
			document.getElementById('span_version2').textContent = appVersion
		})
		window.api.recibir('saved-bloc', (file)=>{
			console.log("Se ha enviado petición al renderer..."+file);
			if (file){
			console.log("Vamos a poner título: "+file);
			document.getElementById('span_file').textContent = " - " + file
			}else{
alert("No se ha recibido un nombre de archivo válido");			}
		})
		window.api.recibir('saved-ino', (file)=>{
			console.log("Se ha enviado petición al renderer..."+file);
			if (file){
			console.log("Vamos a poner título: "+file);
			document.getElementById('span_file').textContent = " - " + file
			}else{
alert("No se ha recibido un nombre de archivo válido");			}
		})
		window.api.recibir("dameSketch",()=>{
			if (window.localStorage.verif==undefined){window.localStorage.verif='false';}
			var data;
			if (localStorage.getItem('content') == "off") {
				 data = editor.getValue()
			} else {
				 data = $('#pre_previewArduino').text()
			}try{
				        // Recuperar 'carte' de LocalStorage
						var carte = localStorage.getItem('card'); // Aquí defines 'carte'

						// Verificar si 'carte' existe antes de usarlo
						if (!carte) {
							throw new Error("La variable 'carte' no está definida en LocalStorage.");
						}
				
			var datos={
				programa:data,
				carte : carte,
		   build:profile[carte].build,
		cpu : profile[carte].cpu,
		  type:profile[carte].type,
		  micro:profile[carte].micro,
		prog : localStorage.getItem('prog'),
		  com :portserie.value,
		  instalando: window.localStorage.instalando,
		  verif: window.localStorage.verif
			}
			//console.log(localStorage.getItem('card'));
		}catch (error){
console.log(error);
		}
		messageDiv.style.color = '#000000'
		messageDiv.innerHTML = Blockly.Msg.check + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>';
		console.log("Datos: "+datos.programa);
		window.api.enviar("tomaSketch",(datos));
	
		});
		window.api.recibir("instalarPrograma",()=>{
			messageDiv.style.color = '#000000'
		messageDiv.innerHTML = Blockly.Msg.upload + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
		})
		window.api.recibir("programaCompilado",(cadena)=>{
			window.localStorage.setItem('verif',true);
			if (cadena=='yaCompilado'&&window.localStorage.getItem('instalando')=='false'){
				messageDiv.innerHTML=Blockly.Msg.alreadyCompiled;
				btn_close_message.style.display="inline";
				window.localStorage.setItem('verif',true);
				return
			}else if (window.localStorage.getItem('instalando')=='false'){
			console.log("Mensaje de compilacion: "+cadena);
			window.localStorage.setItem('detail',cadena);
						messageDiv.innerHTML = Blockly.Msg.check + ': OK';
			btn_close_message.style.display = "inline";
			}else {
				messageDiv.style.color = '#000000'
		messageDiv.innerHTML = Blockly.Msg.upload + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>';

			}
		})
		window.api.recibir("programaGrabado",(cadena)=>{
			
			console.log("Mensaje de compilacion: "+cadena);
			window.localStorage.setItem('detail',cadena);
			messageDiv.innerHTML = Blockly.Msg.upload + ': OK'
			btn_close_message.style.display = "inline"
			window.localStorage.setItem('verif',false);
			window.localStorage.setItem('instalando',false);
		
		})
		window.api.recibir("enviaErrores",(errors)=>{
			messageDiv.style.color = '#ff0000'
			messageDiv.innerHTML = "ERROR DE COMPILACIÓN <br>"
				errors.forEach(function(e){
					messageDiv.innerHTML += e + "<br>";
					btn_close_message.style.display = "inline"

				})
				btn_close_message.style.display = "inline";
				window.localStorage.setItem('verif',false);
				window.localStorage.setItem('instalando',false);

		})
		window.api.recibir("errorEncontrado",(error)=>{
			messageDiv.style.color = '#ff0000'
			messageDiv.innerHTML = "ERROR ENCONTRADO <br>";
			console.log(error);
			
					messageDiv.innerHTML += error + "<br>";
				btn_close_message.style.display = "inline";
				window.localStorage.setItem('verif',false);
				window.localStorage.setItem('instalando',false);
		});
		$('#btn_saveXML').on('click', function(){
			console.log("A grabar");
			var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
			var toolbox = localStorage.getItem("toolbox")
			if (!toolbox) {
				toolbox = $("#toolboxes").val()
			}
			if (toolbox) {
				var newel = document.createElement("toolbox")
				newel.appendChild(document.createTextNode(toolbox))
				xml.insertBefore(newel, xml.childNodes[0])
			}
			var toolboxids = localStorage.getItem("toolboxids")
			if (toolboxids === undefined || toolboxids === "") {
				if ($('#defaultCategories').length) {
					toolboxids = $('#defaultCategories').html()
				}
			}
			var code = Blockly.Xml.domToPrettyText(xml);
			window.api.enviar('save-bloc',code);
		/* 	fs.writeFile(path, code, function(err){
				if (err) return console.log(err)
			})
			var file = path.split("\\")
			var id = file.length - 1
			document.getElementById('span_file').textContent = " - " + file[id]	 */	
		})
		$('#toolboxes').on('change', function(){
			console.log("Cambiando de toolbox: "+$('#toolboxes').val());
			window.localStorage.setItem('toolbox',$('#toolboxes').val());
		});

		$('#btn_verify').on('click', function () {
			window.localStorage.setItem('instalando',false);
			window.api.enviar("compruebaInstalacion");

		});
		$('#btn_flash').on('click', function () {
			window.localStorage.setItem('instalando',true);
			window.api.enviar("compruebaInstalacion");

		});
		$('#btn_bin').on('click', function () {
			if (window.localStorage.getItem('verif')!='true'){
				alert ("Hay que compilar primero");
			}else{
			/* 	var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
			var toolbox = localStorage.getItem("toolbox")
			if (!toolbox) {
				toolbox = $("#toolboxes").val()
			}
			if (toolbox) {
				var newel = document.createElement("toolbox")
				newel.appendChild(document.createTextNode(toolbox))
				xml.insertBefore(newel, xml.childNodes[0])
			}
			var toolboxids = localStorage.getItem("toolboxids")
			if (toolboxids === undefined || toolboxids === "") {
				if ($('#defaultCategories').length) {
					toolboxids = $('#defaultCategories').html()
				}
			}
			var code = Blockly.Xml.domToPrettyText(xml)
			var res = path.split(".")
			fs.writeFile(res[0]+'.bloc', code, function(err){
				if (err) return console.log(err)
			})
			var file = path.split("\\")
			var id = file.length - 1
			document.getElementById('span_file').textContent = " - " + file[id]
			//homedir+'/.masaylo/arduino/sketch/sketch.ino'

			fs.copyFile(homedir+'/.masaylo/arduino/sketch/build/arduino.avr.'+localStorage.card+'/sketch.ino.with_bootloader.hex', res[0]+'_with_bootloader.hex', (err) => {if (err) throw err})
			fs.copyFile(homedir+'/.masaylo/arduino/sketch/build/arduino.avr'+localStorage.card+'/sketch.ino.hex', res[0]+'.hex', (err) => {if (err) throw err})
			fs.copyFile(homedir+'/.masaylo/arduino/sketch/sketch.ino', res[0]+'.ino', (err) => {if (err) throw err}) */
		
			var tarjeta=window.localStorage.getItem('card');
			window.api.enviar ('save-bin',tarjeta);
			}

		});
			$('#btn_print').on("click", function(){
				var ws = BlocklyDuino.workspace.svgBlockCanvas_.cloneNode(true);
				ws.removeAttribute("width");
				ws.removeAttribute("height");
				ws.removeAttribute("transform");
				var styleElem = document.createElementNS("http://www.w3.org/2000/svg", "style");
				styleElem.textContent = Blockly.Css.CONTENT.join('') ;
				ws.insertBefore(styleElem, ws.firstChild);
				var bbox = BlocklyDuino.workspace.svgBlockCanvas_.getBBox();
				var canvas = document.createElement( "canvas" );
				canvas.width = Math.ceil(bbox.width+10);
				canvas.height = Math.ceil(bbox.height+10);
				var ctx = canvas.getContext( "2d" );
				ctx.fillStyle = 'rgb(255, 255, 255)';
				ctx.fillRect(0, 0, canvas.width, canvas.height);
				var xml = new XMLSerializer().serializeToString(ws);
				xml = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+bbox.width+'" height="'+bbox.height+'" viewBox="' + bbox.x + ' ' + bbox.y + ' '  + bbox.width + ' ' + bbox.height + '"><rect width="100%" height="100%" fill="white"></rect>'+xml+'</svg>';
				var img = new Image();
				var code = btoa(unescape(encodeURIComponent(xml)));
				img.setAttribute( "src", 'data:image/svg+xml;base64,' + code);
				img.onload = function() {
					ctx.drawImage( img, 5, 5 );
					var canvasdata = canvas.toDataURL("image/png",1);
					var data = canvasdata.replace(/^data:image\/png;base64,/,"")
/* 					fs.writeFile(path, data, 'base64', function(err){
						if (err) return console.log(err)
					}) */
				window.api.enviar("save-png",data);
				}			})
		$('#btn_copy').on('click', function(){
			console.log("A copiar al portapapeles");
			window.api.enviar('copiaPortapapeles',$('#pre_previewArduino').text())
		
		})
			$('#btn_saveino').on('click', function(){
				/* if (localStorage.getItem('content') == "off") {
					var code = editor.getValue()
				} else {
					var code = $('#pre_previewArduino').text()
				}
				if (path === null) {
					return
				} else {
					fs.writeFile(path, code, function(err){
						if (err) return console.log(err)
					})
					var file = path.split("\\");
					var id = file.length - 1 ;
					document.getElementById('span_file').textContent = " - " + file[id];
				} */
			var code;
					if (localStorage.getItem('content') == "off") {
						 code = editor.getValue()
					} else {
						 code = $('#pre_previewArduino').text()
					}
				if (localStorage.getItem("prog") == "python") {
					window.api.enviar('save-py',code);
				} else { 
					window.api.enviar('save-ino',code); }
			})
		$('#btn_quit').on('click', function(){
			window.api.enviar("cierraVentana");
		})
		$('#btn_min').on('click', function(){
			window.api.enviar("minimizaVentana");
		})
		$('#btn_max').on('click', function(){
			window.api.enviar("maximizaVentana");
		})
		$('#btn_close_message').on('click', function(){
			detailDiv.innerHTML = ""
			localStorage.setItem('detail', "")
			btn_detail.style.display = "none"
			btn_close_message.style.display = "none"
			$('#message').modal('hide')
		})
		$('#btn_term').on('click', function(){
			if (portserie.value=="com"){
				$("#message").modal("show")
				messageDiv.style.color = '#000000'
				messageDiv.innerHTML = Blockly.Msg.com2
				btn_close_message.style.display = "inline"
				return
			}
			if (localStorage.getItem("prog") == "python") { window.api.enviar("repl") } else { window.api.enviar("prompt",window.localStorage.getItem('com')) }
		})
		window.api.recibir("createVariable", (variableName) => {
			console.log("Actualizando lista de variables: "+variableName);
			BlocklyDuino.workspace.createVariable(variableName);
			BlocklyDuino.workspace.updateVariableList(true);
		//	const workspace = Blockly.getMainWorkspace();
		//	workspace.createVariable(variableName);
		//	workspace.updateVariableList(true);
		});
		