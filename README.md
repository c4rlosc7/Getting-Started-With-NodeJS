# NodeJS

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. npm is a Node.js package of open source library which is largest in the world.

## It is asynchronous and event Driven

All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call.

# NPM : Node Package Manager

It’s an official open source package manager for Node written purely in Javascript.

# Init with node js

> npm init --yes

> npm i express --save

> node app 

# HBS

Handlebars provides the power necessary to let you build semantic templates effectively with no frustration. Handlebars is largely compatible with Mustache templates. In most cases it is possible to swap out Mustache with Handlebars and continue using your current templates.

> npm i hbs --save


# Nodemon

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. 

> npm i -g nodemon

Next command we allow render files js and hbs

> nodemon src/app -e js, hbs

localhost:3000/calc?name=carlos&note=2

# Body parser

Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

> npm install body-parser

```java
var bodyParser = require('body-parser')
``` 

# Boostrap

> npm i bootstrap --save

<pre>
foundation-nodejs
  |  - file
        |  - functions.js
        |  - index.js
        |  - list.json
        |  - package.json
        |  - yargs.js                           
  |  - server1
        |  - public
                |  - index.html
        |  - average.js
        |  - express.js
        |  - index.js
        |  - package.json
        |  - public                                    
  |  - server2
        |  - public
                |  - index.html
        |  - average.js
        |  - express.js
        |  - index.js
        |  - package.json
        |  - public             
</pre>