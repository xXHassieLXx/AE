const express = require('express');
const router = express.Router();
const Categoria = require('../models/categoria');
const bodyParser = require('body-parser');
 
router.use(bodyParser.json());
 
router.get('/categorias', (req, res) => {
        Categoria.find()
        .then(categorias => {
            res.json(categorias);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});
//Middleware
router.get('/categorias/:id',(req, res) => {
    Categoria.findById(req.params.id)
    .then( categoria => {
        res.json(categoria);
    })
    .catch( err => {
        res.send(err);
    })
});
 
router.delete('/categorias/:id',(req, res) => {
    Categoria.deleteOne({ _id: req.params.id })
    .then( resultado => {
        res.json(resultado);
    })
    .catch( err => {
        res.send(err);
    })
});
 
//actualizar
router.put('/categorias/:id',(req, res) => {
    Categoria.updateOne({ _id: req.params.id }, req.body )
    .then( categoria => {
        res.json(categoria);
    })
    .catch( err => {
        res.send(err);
    })
});
//Insertar producto
router.post('/categorias', (req, res) => {
    const categoria = new Categoria(req.body);
    categoria.save()
    .then( categoria => {
        res.json(categoria);
    })
    .catch( err => {
        res.status(400).send(err);
    });
});
 
module.exports = router;