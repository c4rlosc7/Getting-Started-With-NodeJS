const { argv } = require('./yargs');
const functions = require('./functions');

// console.log(argv)
// console.log(' posicion 0 ' + argv._[0])

let command = argv._[0];

switch (command) {
    case 'show':
        functions.show();
        break;

    case 'create':
        functions.create(argv);
        break;

    case 'showStudent':
        functions.showStudent(argv.n);
        break;

    case 'winMath':
        functions.winMath();
        break;

    /*case 'ave':
        functions.averageStudent(argv.n);
        break;*/

    case 'ave3':
        functions.aveUpThree();
        break;

    case 'update':
        functions.update(argv.n, argv.c, argv.sc);
        break;

    case 'delete':
        functions.del(argv.n);
        break;

    default:
        console.log('No ingresó un commando éxistente!!!');
        break;
}
