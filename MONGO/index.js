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