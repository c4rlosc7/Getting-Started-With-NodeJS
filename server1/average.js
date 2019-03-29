const options = {
    nota1: {
        demand: true,
        alias: 'a'
    },
    nota2: {
        demand: true,
        alias: 'b'
    },
    nota3: {
        demand: true,
        alias: 'c'
    }
}

const argv = require('yargs')
    .command('promedio', 'Realizando bonus promedio', options)
    .argv;

function average(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

let result = average(argv.a, argv.b, argv.c);

module.exports = {
    result
};