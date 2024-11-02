const express = require('express');
const routes = express.Router();


const blogs = [
    {titulo: 'Artículo 1', autor: 'Diego Rojas', contenido: 'Lorem ipsum'},
    {titulo: 'Artículo 2', autor: 'Pablo Rojas', contenido: 'Lorem ipsum'},
    {titulo: 'Artículo 3', autor: 'Ana Rojas', contenido: 'Lorem ipsum'},
    {titulo: 'Artículo 3', autor: 'Francisco Rojas', contenido: 'Lorem ipsum'},
    {titulo: 'Artículo 3', autor: 'Maron Rojas', contenido: 'Lorem ipsum'},
    {titulo: 'Artículo 3', autor: 'Rodrigo Rojas', contenido: 'Lorem ipsum'},
    {titulo: 'Artículo 3', autor: 'Manuel Rojas', contenido: 'Lorem ipsum'},
];


router.get('/articulos', (req, res) => {
        res.render('articulos',{titulo:"Articulos", articulos:articulos});
    }
);
