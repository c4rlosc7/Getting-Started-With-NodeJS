# NodeJS

<pre>
project-using-nodejs
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

> npm init
> npm i express --save
> node app 

# HBS

Handlebars provides the power necessary to let you build semantic templates effectively with no frustration. Handlebars is largely compatible with Mustache templates. In most cases it is possible to swap out Mustache with Handlebars and continue using your current templates.

> npm i hbs --save


# nodemon
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