var input = document.getElementById("var_name")

input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) document.getElementById("btn_variable").click()
})
document.getElementById('btn_quit').onclick = function() {
	window.api.enviar("closeDialog", "");
	close()
}
document.getElementById('btn_variable').onclick = function() {
	window.api.enviar("closeDialog", document.getElementById("var_name").value)
	close()
}
window.onload=async function() {
	document.getElementById("var_name").focus()
	var options = await window.api.enviarSincrono("openDialog", "")
	console.log(JSON.stringify(options));
	var params = JSON.parse(options)
	console.log("Opciones recibidas: "+params);
	document.getElementById("title").innerHTML = params.label
	document.getElementById("var_name").value = params.value
	document.getElementById("btn_variable").innerText = params.ok 
}