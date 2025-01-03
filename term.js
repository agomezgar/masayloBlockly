
//var line = SerialPort.parsers.Readline;
var moniteur = document.getElementById('fenetre_term')
var com = localStorage.getItem("com")
var connexion=false;
var velocidad=document.getElementById('velocidad');
var baud=parseInt(velocidad.value);
localStorage.setItem("baudrate",baud);
	velocidad.onchange=function(){
		alert("Cambiando velocidad a: "+velocidad.value+" baudios.");
		localStorage.setItem("baudrate",velocidad.value);
		baud=parseInt(localStorage.getItem("baudrate"));
	}

	document.getElementById('btn_envoi').disabled=true
	document.getElementById('fenetre_term').disabled=true;
	document.getElementById('schbox').disabled=true;
	velocidad.disabled=false;
	document.getElementById('btn_efface').onclick = function() {
		document.getElementById('fenetre_term').textContent = ''
	}
	document.getElementById('btn_envoi').onclick = function() {
		var entree = document.getElementById('schbox').value
		if (connexion){
			window.api.enviar("escribirPuertoSerie",(entree));

			document.getElementById('fenetre_term').innerHTML += entree+"<br>"
			document.getElementById('schbox').value='';
		}
	}
	document.getElementById('btn_quit').onclick = function() {
		window.close()
		if (connexion){
			window.api.enviar("cierraPuertoSerie");
		}
	}
	document.getElementById('btn_connect').onclick = function(event) {

		
		if (connexion){
			document.getElementById('btn_connect').innerHTML="<span class='fa fa-play'> Arrancar</span>";
			document.getElementById('btn_envoi').disabled=true;
			document.getElementById('schbox').disabled=true;
			document.getElementById('velocidad').disabled=false;
			connexion = false
			window.api.enviar("cierraPuertoSerie");
		} else {
			document.getElementById('btn_connect').innerHTML="<span class='fa fa-pause'> Parar</span>"
			document.getElementById('btn_envoi').disabled=false;
			document.getElementById('schbox').disabled=false;
			document.getElementById('velocidad').disabled=true;
			var puerto={path:localStorage.getItem("com"),
				baud:localStorage.getItem("baudrate")
			}
			console.log("Abriendo puerto: "+puerto.path+" a velocidad "+puerto.baud+" baudios");
			window.api.enviar("abrePuertoSerie",puerto);

			connexion = true;

		}
	}
 	window.api.recibir("leerDatosSerie",(data)=>{
		if (connexion){
			console.log('data');
			moniteur.innerHTML += data + "<br>"
			moniteur.scrollTop = moniteur.scrollHeight;
			moniteur.animate({scrollTop: moniteur.scrollHeight})
		}
	}) 
 	document.getElementById('btn_csv').onclick = function(event) {
		var code = document.getElementById('fenetre_term').innerHTML
		code = code.split('<br>').join('\n')
		window.api.enviar('save-csv',code)
	} 
/* 	ipcRenderer.on('saved-csv', function(event, path){
		var code = document.getElementById('fenetre_term').innerHTML
		code = code.split('<br>').join('\n')
		if (path === null) {
			return
		} else {
			fs.writeFile(path, code, function(err){
				if (err) return console.log(err)
			})
		}
	})
 */