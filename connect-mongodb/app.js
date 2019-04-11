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

  // ------------------Insert some student---------------------//
  /*collection.insertOne({
    name: 'Pepe',
    math: 1,
    english: 1,
    programming: 1,
    soccer: 1
  }, (err, result) => {
    if (err) {
      return console.log('Error ingresando los datos.')
    }
    return console.log(result.ops)
  });*/

  // ------------------Insert some students---------------------//
  /*collection.insertMany([
    { name: 'aaa', math: 2, english: 3, programming: 1 },
    { name: 'eee', math: 2, english: 3, programming: 1 },
    { name: 'uuu', math: 2, english: 3, programming: 1 },
  ], function (err, result) {
    if (err) {
      return console.log('Error ingresando los datos.')
    }
    return console.log(result.ops)
  });*/

  // -------------------Find some student----------------------
  /*collection.findOne({ name: 'Messi' }, (err, result) => {
    if (err) {
      console.log('Error obteniendo los datos.')
    }
    if (!result) {
      console.log('No se encontro el nombre.')
    }
    console.log(result)
  });*/

  // --------------------Find some students--------------------
  /*collection.find({math: 3}).toArray(function (err, result) {
    if (err) {
      console.log('Error encontrando los datos.')
    }
    console.log(result)
  });*/

  // --------------------Update some students--------------------
  /*collection.updateOne({ name: 'Messi' }
    , { $set: { english: 5, math: 5, programming: 5 } }, function (err, result) {
      if (err) {
        console.log('Error encontrando los datos.')
      }
      console.log(result)
    });*/

  // --------------------Remove some students--------------------
  /*collection.deleteOne({ name: 'Carlos' }, function (err, result) {
    if (err) {
      console.log('Error encontrando los datos.')
    }
    console.log('Se elimino del dato correctamente.')
    console.log(result)
  });*/

  // --------------------Remove some students--------------------
  // $lt, less that
  collection.deleteMany({ math: {$lt: 3} }, function (err, result) {
    if (err) {
      return console.log('Error ingresando los datos.')
    }
    return console.log(result.ops)
  });


  client.close();
});



