const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    console.log(__dirname + '/view/inicio.html');
    res.sendFile(path.join(__dirname, '/view/inicio.html'));
});

app.get('/nosotros', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/nosotros.html'));
});

app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/productos.html'));
});

app.get('/contacto',(req,res)=>{
    res.redirect('/nosotros')
});

// Middleware para manejar errores 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '/view/404.html'));
});

app.listen(3000, () => {
    console.log('Servidor activo en el puerto 3000');
});



app.get('/contacto',(req,res)=>{
    res.redirect(__dirname+'/view/nosotros.html')
});

