let port;

async function requestPort() {
  try {
    // Solicitar al usuario que seleccione un puerto serie
    port = await navigator.serial.requestPort();
    console.log('Puerto seleccionado:', port);

    // Abrir el puerto con configuración específica
    await port.open({ baudRate: 9600 });
    console.log('Puerto abierto con éxito.');
  } catch (err) {
    console.error('Error al abrir el puerto:', err);
  }
}
async function readData() {
  if (!port) {
    console.error('Primero debes abrir el puerto.');
    return;
  }

  try {
    const textDecoder = new TextDecoderStream();
    const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
    const reader = textDecoder.readable.getReader();

    console.log('Esperando datos...');
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        // El puerto se cerró
        console.log('Lectura terminada.');
        break;
      }
      console.log('Datos recibidos:', value);
    }
  } catch (err) {
    console.error('Error al leer datos:', err);
  }
}
async function writeData(message) {
  if (!port) {
    console.error('Primero debes abrir el puerto.');
    return;
  }

  try {
    const textEncoder = new TextEncoder();
    const writer = port.writable.getWriter();
    await writer.write(textEncoder.encode(message));
    console.log('Datos enviados:', message);
    writer.releaseLock();
  } catch (err) {
    console.error('Error al escribir datos:', err);
  }
}
async function closePort() {
  if (!port) {
    console.error('No hay ningún puerto abierto.');
    return;
  }

  try {
    await port.close();
    console.log('Puerto cerrado.');
  } catch (err) {
    console.error('Error al cerrar el puerto:', err);
  }
}

