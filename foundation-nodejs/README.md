# Express-hbs courses

## Start app

### Install dependency

> npm install 

### Run project

> npm start

***

# Dependencies

- body-parser
- bootstrap
- express
- hbs
- jquery
- popper.js
- mongoose

***

# Mongoose

Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

## Installation mongoose

> npm i mongoose

## Importing
```javascript
// Using Node.js `require()`
const mongoose = require('mongoose');
 
// Using ES6 imports
import mongoose from 'mongoose';
```
## Connecting to MongoDB

```javascript
const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});
```
## Defining a Model

Models are defined through the Schema interface.

```javascript
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});
```
## Accessing a Model

Once we define a model through mongoose.model('ModelName', mySchema), we can access it through the same function.

```javascript
const MyModel = mongoose.model('ModelName', mySchema);
```

# Mongoose-unique-validator

mongoose-unique-validator is a plugin which adds pre-save validation for unique fields within a Mongoose schema.

> npm i mongoose-unique-validator

[Mongoose validator](https://www.npmjs.com/package/mongoose-unique-validator)

```javascript
// on model.js
 var uniqueValidator = require('mongoose-unique-validator');

 var mySchema = mongoose.Schema(/* put your schema definition here */);
 mySchema.plugin(uniqueValidator);
 ```

# Bcrypt

bcrypt is a password hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher, and presented at USENIX in 1999. Besides incorporating a salt to protect against rainbow table attacks, bcrypt is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power.

The bcrypt function is the default password hash algorithm for OpenBSD and other systems including some Linux distributions such as SUSE Linux.

There are implementations of bcrypt for C, C++, C#, Go, Java, JavaScript, Elixir, Perl, PHP, Python, Ruby and other languages.

> npm i bcrypt

[Bcrypt](https://www.npmjs.com/package/bcrypt)

```javascript
 var hash = bcrypt.hashSync(myPlaintextPassword, salt);
 ```

# Font Awesome v4.7.0

Font Awesome is a full suite of 675 pictographic icons for easy scalable vector graphics on websites, created and maintained by <code>Dave Gandy.</code>

> npm i font-awesome
--bootstrap/dist/js

[Font-awesome](https://www.npmjs.com/package/font-awesome)
 
# Express-session local

> npm install express-session

```javascript
 var session = require('express-session')
 ```
[Express-Session](https://www.npmjs.com/package/express-session)

 # Memorystore cloud

> express-session full featured MemoryStore module without leaks!

> npm i memorystore

[MemoryStore](https://www.npmjs.com/package/memorystore)

# Middleware

Middleware makes it easier for software developers to implement communication and input/output, so they can focus on the specific purpose of their application. It gained popularity in the 1980s as a solution to the problem of how to link newer applications to older legacy systems, although the term had been in use since 1968

# Node-localstorage

> npm i node-localstorage

# Jsonwebtoken

An implementation of JSON Web Tokens.

> npm i jsonwebtoken

# Morgan

HTTP request logger middleware for node.js

> npm i morgan

https://foundation-nodejs.herokuapp.com/





















