const { argv } = require('./yargs');
const functiones = require('./funciones');

// console.log(argv)
// console.log(' posicion 0 ' + argv._[0])
let comando = argv._[0];

if (argv._[0] == 'create'){
    functiones.create(argv);
}
