# Express-hbs courses

## Start app

### install dependency
> npm install 

### run project
> npm start

https://foundation-nodejs.herokuapp.com/
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

## Installation

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

 




















