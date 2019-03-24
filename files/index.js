const { argv } = require('./yargs');
const functiones = require('./funciones');

// console.log(argv)
// console.log(' posicion 0 ' + argv._[0])

let command = argv._[0];

switch (command) {
    case 'show':
        functiones.show();
        break;

    case 'create':
        functiones.create(argv);
        break;

    case 'update':
        break;

    case 'delete':

        break;

    default:
        console.log('No ingresó un commando éxistente!!!');        
        break;
}
