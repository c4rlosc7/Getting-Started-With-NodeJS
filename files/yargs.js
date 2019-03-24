const name = {
    demand: true,
    alias: 'n'
}

const math = {
    demand: true,
    alias: 'm'
}

const english = {
    demand: true,
    alias: 'e'
}

const program = {
    demand: true,
    alias: 'p'
}

const create = {
    name,
    math,
    english,
    program
}

const argv = require('yargs')
            .command('create', 'Crear un estudiante en la DB', create)
            .command('show', 'Muestra los estudiantes con sus datos.')
            .argv;

module.exports = {
    argv
};