# Mongo DB

[Download mongoDB](https://www.mongodb.com/download-center/community)

- Descargar mongo-db zip

- Descomprimir en C:/User/UserName/mongo-db

- Crear una carpeta para almanecenar los datos 
  - __C:/User/carlos/mongo-data__

- Dentro de la carpeta **C:/User/UserName/mongo-db** ejecutar cmd
  - > C:\Users\C4rlosc7\mongo-db\bin>mongod.exe --dbpath=/users/carlos/mongo-data

Documentacion: 
[Quick-Start](http://mongodb.github.io/node-mongodb-native/3.2/quick-start/quick-start/)

***

## Connect to MongoDB

Create a new app.js file and add the following code to try out some basic CRUD operations using the MongoDB driver.

```javascript
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
```
> node app.js

(node:147180) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option __{ useNewUrlParser: true }__ to MongoClient.connect.
Connected successfully to server

```javascript
// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });
```

> node app.js

Connected successfully to server

***