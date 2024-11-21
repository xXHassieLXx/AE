const mongoose = require('mongoose')    
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
        nombre: {
            type: String,
            required: true
        },

        correo: {
            type: String,
            required: true
        }
});


const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;

