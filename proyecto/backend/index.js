const express = require('express');
const app = express();

const productosRoutes = require('./routes/productosRoutes');

const moongose = require('mongoose');
const conexion = require('./conexion');

moongose.connect(conexion)
    .then(() => {
        console.log('Conexión a la base de datos establecida')
    })
    .catch((err) => {
        console.log('Error al conectar a la base de datos', err)
    })

app.listen(3000, () => {
    console.log('Servidor ejecutandose en el puerto 3000')
});

app.use(productosRoutes);