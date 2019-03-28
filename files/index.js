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

    case 'showStudent':
        functiones.showStudent(argv.n);
        break;

    case 'winMath':
        functiones.winMath();
        break;

    /*case 'ave':
        functiones.averageStudent(argv.n);
        break;*/

    case 'ave3':
        functiones.aveUpThree();
        break;

    case 'update':
        functiones.update(argv.n, argv.c, argv.sc);
        break;

    case 'update':
        functiones.update(argv.n);
        break;

    default:
        console.log('No ingresó un commando éxistente!!!');
        break;
}
