const express = require('express');

const app = express();

// view engine es un motor de plantillas que permite renderizar vistas
// usaremos el motor de plantillas ejs
// para instalar EJS: npm install ejs

app.set('view engine', 'ejs');

// Ruta para la página principal
app.get('/', (req, res) => {
    

    res.render('inicio', {titulo:'Inicio Nuevo',blogs});
});

app.get('/nosotros', (req, res) => {
    console.log(__dirname + '/views/nosotros.html');
    res.sendFile(__dirname + '/views/nosotros.html');
});

app.get('/productos', (req, res) => {
    res.sendFile(__dirname, '/views/productos.html');
});

app.get('/contacto', (req, res) => {
    res.redirect('/nosotros');
});

// Middleware para manejar errores 404
app.use((req, res) => {
    res.status(404).sendFile(__dirname, '/view/404.html');
});


app.listen(3000, () => {
    console.log('Servidor activo en el puerto 3000');
});
