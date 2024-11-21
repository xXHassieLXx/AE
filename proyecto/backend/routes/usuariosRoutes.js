const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario')
const bodyParser = require('body-parser');
 
router.use(bodyParser.json());

router.get('/usuarios', (req, res) => {
    Usuario.find()
    .then(usuarios => {
        res.json(usuarios);
    })
    .catch(err => {
        res.status(404).send(err);
    });
})

router.get('/usuarios/:id',(req, res) => {
    Usuario.findById(req.params.id)
    .then( usuario => {
        res.json(usuario);
    })
    .catch( err => {
        res.send(err);
    })
});
 
router.delete('/usuarios/:id',(req, res) => {
    Usuario.deleteOne({ _id: req.params.id })
    .then( resultado => {
        res.json(resultado);
    })
    .catch( err => {
        res.send(err);
    })
});
 
//actualizar
router.put('/usuarios/:id',(req, res) => {
    Usuario.updateOne({ _id: req.params.id }, req.body )
    .then( usuario => {
        res.json(usuario);
    })
    .catch( err => {
        res.send(err);
    })
});
//Insertar producto
router.post('/usuarios', (req, res) => {
    const usuario = new Usuario(req.body);
    usuario.save()
    .then( usuario => {
        res.json(usuario);
    })
    .catch( err => {
        res.status(400).send(err);
    });
});
 
module.exports = router;
