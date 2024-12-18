const express = require('express');

const app = express();

// view engine es un motor de plantillas que permite renderizar vistas
// usaremos el motor de plantillas ejs
// para instalar EJS: npm install ejs

app.set('view engine', 'ejs');

// Ruta para la página principal
app.get('/', (req, res) => {
    const blogs = [
        {titulo: 'Artículo 1', autor: 'Diego Rojas', contenido: 'Lorem ipsum'},
        {titulo: 'Artículo 2', autor: 'Pablo Rojas', contenido: 'Lorem ipsum'},
        {titulo: 'Artículo 3', autor: 'Ana Rojas', contenido: 'Lorem ipsum'},
        {titulo: 'Artículo 3', autor: 'Francisco Rojas', contenido: 'Lorem ipsum'},
        {titulo: 'Artículo 3', autor: 'Maron Rojas', contenido: 'Lorem ipsum'},
        {titulo: 'Artículo 3', autor: 'Rodrigo Rojas', contenido: 'Lorem ipsum'},
        {titulo: 'Artículo 3', autor: 'Manuel Rojas', contenido: 'Lorem ipsum'},
    ];

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
