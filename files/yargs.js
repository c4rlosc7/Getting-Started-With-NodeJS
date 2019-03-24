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

const showStudent = {
    name
}

const update = {
    name,
    course: {
        demand: true,
        alias: 'c'
    }
}

const del = {
    name
}

const argv = require('yargs')
            .command('create', 'Crear un estudiante en la DB', create)
            .command('show', 'Muestra los estudiantes con sus datos.')
            .command('showStudent', 'Muestra los estudiantes con sus datos.', showStudent)
            .argv;

module.exports = {
    argv
};