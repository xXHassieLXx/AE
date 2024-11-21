const express = require('express');
const router = express.Router();
const Producto = require('../models/producto')
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/productos', (req, res) => {
    Producto.findById()
    .then(productos => {
        res.json(productos);
    })
    .catch(err => {
        res.status(404).send(err);
    });
})

router.put('/productos/:id', (req, res) => {
    Producto.updateOne({_id: req.params.id}, req.body)
    .then(resultado => {
        res.json(resultado);
    })
    .catch(err => {
        res.json(err);
    })
});


router.delete('/productos/:id', (req, res) => {
    Producto.deleteOne({_id: req.params.id})
    .then(resultado => {
        res.json(resultado)
    })
    .catch(err => {
        res.json(err)
    })
});

router.post('/productos/:id', (req, res) => {
    const producto = new Producto(req.body);
    producto.save()
    .then( producto => {
        res.json(producto);
    })
    .catch( err => {
        res.status(400).send(err);
    });
})

module.exports = router;

