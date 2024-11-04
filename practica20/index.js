// const express = require('express');

// const app = express();

// // view engine es un motor de plantillas que permite renderizar vistas
// // usaremos el motor de plantillas ejs
// // para instalar EJS: npm install ejs

// app.set('view engine', 'ejs');

// // Ruta para la página principal
// app.get('/', (req, res) => {
    

//     res.render('inicio', {titulo:'Inicio Nuevo',blogs});
// });

// app.get('/nosotros', (req, res) => {
//     console.log(__dirname + '/views/nosotros.html');
//     res.sendFile(__dirname + '/views/nosotros.html');
// });

// app.get('/productos', (req, res) => {
//     res.sendFile(__dirname, '/views/productos.html');
// });

// app.get('/contacto', (req, res) => {
//     res.redirect('/nosotros');
// });

// // Middleware para manejar errores 404
// app.use((req, res) => {
//     res.status(404).sendFile(__dirname, '/view/404.html');
// });


// app.listen(3000, () => {
//     console.log('Servidor activo en el puerto 3000');
// });


require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.fjznt.mongodb.net/`
const client = new MongoClient(uri);

app.use(express.static(path.join(__dirname)));

app.get('/articulos', async (req, res) => {
  try {
      await client.connect();
      const db = client.db('blog');
      const articulos = await db.collection('articulos').find().toArray();
      res.json(articulos);  // Envía los datos como JSON
  } catch (error) {
      console.error(error);
      res.status(500).send("Error en la conexión con la base de datos");
  } finally {
      await client.close();
  }
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en el enlace de Render`);
});