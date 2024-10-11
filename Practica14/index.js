const http = require('http');

const PUERTO = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Contentent-Type','text/html');
    res.write('<h1>Hola pablo saca las cocas</h1>');
    res.write('<ul><li>JS</li><li>Python</li><li>Java</li></ul>');
    res.write(req.url+'<br>');
    res.end(req.method);

});

server.listen(PUERTO, () => {
    console.log('Servidor en el puerto 3000');
});

