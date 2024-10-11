const fs = require('fs'); 

const leerArchivo = (err, data) =>{
    if(err){
        console.log('Error',err);
    }else{
        console.log(data.toString());
    }
}

fs.readFile('archivo.txt', leerArchivo);

const escribirArchivo = (err, data) => {
    if(err){
        console.log('Error',err);
    }else{
        console.log('Se escribio correctamente');
    }
}

fs.readFile('nuevoArchivo.txt', 'Hola sobrescribiendo el archivo' , escribirArchivo);


const eliminarArchivo = (err, data) =>{
    if(err){
        console.log('Error',err);
    }else{
        console.log(data.toString());
    }
}


fs.unlink('nuevoArchivo.txt', (err) => {
    console.log('Se elimino el archivo');
});

fs.mkdir('nuevaCarpeta', (err) => {
    console.log('Se Creo la carpeta');
})

fs.mkdir('nuevaCarpeta', (err) => {
    console.log('Se Creo la carpeta');
})

//Reto: Leer todos los archivos y carpetas de nuestro directorio y vamos a crear un front end que muestre los archivos y carpetas usando iconos para diferenciar (usa bootstrap icons)   4

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000; // Puerto para el servidor

// Función para listar archivos y carpetas
const listarArchivosYCarpetas = (dirPath) => {
    const resultado = [];

    const leerDirectorio = (directorio) => {
        const archivos = fs.readdirSync(directorio);
        archivos.forEach(archivo => {
            const rutaCompleta = path.join(directorio, archivo);
            const esCarpeta = fs.lstatSync(rutaCompleta).isDirectory();
            resultado.push({
                nombre: archivo,
                ruta: rutaCompleta,
                tipo: esCarpeta ? 'carpeta' : 'archivo'
            });
            if (esCarpeta) {
                leerDirectorio(rutaCompleta); // Leer subcarpetas
            }
        });
    };

    leerDirectorio(dirPath);
    return resultado;
};

// Endpoint para obtener los archivos y carpetas
app.get('/api/archivos', (req, res) => {
    const rutaProyecto = 'C:\\UNIVERSIDAD\\Cuarto Semestre\\Apps Empresariales\\AE'; // Asegúrate de que esta ruta sea la correcta
    const archivosYCarpetas = listarArchivosYCarpetas(rutaProyecto);
    res.json(archivosYCarpetas); // Enviar los datos como JSON al front-end
});

// Sirve el archivo estático index.html y otros recursos
app.use(express.static(__dirname));

// Iniciar el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
