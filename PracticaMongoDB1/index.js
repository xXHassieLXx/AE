const { MongoClient } = require('mongodb')



const url = "mongodb+srv://hassiel:HaSsi3l.02@cluster0.hz7et.mongodb.net/";
const client = new MongoClient(url);


async function run() {
    try {
      await client.connect();
      const db = client.db('Blog');
      const collection = db.collection('Articulos');
  
      // Find the first document in the collection
      const articulo = await collection.findOne();
      console.log(articulo.titulo);
    } finally {
      // Close the database connection when finished or an error occurs
      await client.close();
    }
  }
  run().catch(console.error);