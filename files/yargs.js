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

const averageStudent = {
    name
}

const update = {
    name,
    course : {
        demand: true,
        alias: 'c'
    },
    score : {
        demand: true,
        alias: 'sc'
    }
}

const del = {
    name
}

const argv = require('yargs')
            .command('create', 'Crear un estudiante en la DB.', create)
            .command('show', 'Muestra los estudiantes con sus datos.')
            .command('showStudent', 'Muestra los estudiantes con sus datos.', showStudent)
            .command('ave3', 'Muestra el promedio del estudiante ingresado.', averageStudent)
            .command('update', 'Actualiza la nota del estudiante seleccionado.', update)
            .command('delete', 'Elimina el estudiante seleccionado.', del)
            .argv;

module.exports = {
    argv
};