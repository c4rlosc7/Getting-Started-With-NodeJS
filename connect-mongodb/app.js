const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function (err) {
  // assert.equal(null, err);
  if (err) {
    return console.log('Cant connect')
  }
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // Get the documents collection
  const collection = db.collection('students');

  // ------------------Insert some student---------------------
  /*collection.insertOne({
    name: 'Messi',
    math: 4,
    english: 4,
    programming: 4,
    soccer: 5
  }, (err, result) => {
    if (err) {
      return console.log('Error ingresando los datos.')
    }
    return console.log(result.ops)
  })*/

  // -------------------Find some student----------------------
  collection.findOne({name: 'Messi'}, (err, result) => {
    if (err) {
      console.log('Error obteniendo los datos.')
    }
    if (!result) {
      console.log('No se encontro el nombre.')
    }
    console.log(result)
  });

  client.close();
});
