const { contextBridge, ipcRenderer } = require('electron');
const path = require('path');

// Ruta de jQuery
const jqueryPath = path.join(__dirname, 'www/js/jquery.min.2.1.3.js');

// Ruta de otros archivos
const bootstrapJsPath = path.join(__dirname, 'www/js/bootstrap.min.3.3.6.js');
const blocklyPath = path.join(__dirname, 'www/js/blockly.min.js');
const indexPath = path.join(__dirname, 'index.js');

// Función para inyectar scripts dinámicamente
function injectScript(src, name, callback) {
  ipcRenderer.send('debug-message', `DEBUG: Intentando cargar ${name} desde: ${src}`);
  const script = document.createElement('script');
  script.src = src;
  script.onload = () => {
    ipcRenderer.send('debug-message', `DEBUG: ${name} cargado correctamente.`);
    if (callback) callback();
  };
  script.onerror = () => {
    ipcRenderer.send('debug-message', `ERROR: No se pudo cargar ${name}.`);
  };
  document.head.appendChild(script);
}

contextBridge.exposeInMainWorld("api", {
  enviar: (datos,objeto)=>{
      ipcRenderer.send(datos,objeto);
  },
  recibir: (canal,datos)=>{
      ipcRenderer.on(canal,(event,...args)=>datos(...args))
  },
  enviarSincrono: async (datos,objeto)=>{
    console.log("ayuda");
    try{
    const result=await ipcRenderer.invoke(datos,objeto);
    console.log(`Resultado recibido del canal ${datos}:`, result);
    return result;
  }catch (error) {
    console.error(`Error en canal ${datos}:`, error);
    return null;
  }
} 
});