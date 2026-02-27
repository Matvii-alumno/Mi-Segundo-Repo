const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'paginaweb.html');

http.createServer((req, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Archivo no encontrado');
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data); // usar res.end en vez de res.write + res.end
  });
}).listen(3000, '0.0.0.0', () => {
  console.log("Servidor corriendo en puerto 3000");
});