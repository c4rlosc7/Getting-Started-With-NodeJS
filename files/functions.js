const fs = require('fs');
studentList = [];

/**
 * Method to created new student
 * @param {*} studentIn 
 */
const create = (studentIn) => {
    getList();
    let student = {
        name: studentIn.name,
        math: studentIn.math,
        english: studentIn.english,
        program: studentIn.program
    };
    let duplicate = studentList.find(n => n.name == studentIn.name);
    if (!duplicate) {
        studentList.push(student);
        save();
    } else {
        console.log('Ya éxiste el estudiante!!!');
    }
}

/**
 * Method to get list to students
 */
const getList = () => {
    try {
        studentList = require('./list.json');
        // studentList = JSON.parse(fs.readFileSync('list.json'));        
    } catch (error) {
        studentList = [];
    }
}

/**
 * Method to save student
 */
const save = () => {
    let data = JSON.stringify(studentList);
    fs.writeFile('list.json', data, (err) => {
        if (err) throw (err);
        console.log('Archivo creado éxitosamente!!!')
    });
}

/**
 * Method to show list of the students
 */
const show = () => {
    getList();
    studentList.forEach(element => {
        console.log(' Notas de ' + element.name)
        console.log(' Math: ' + element.math + ' English: ' + element.english + ' Program: ' + element.program + '\n')
    });
}

/**
 * Method to show student
 * @param {*} name 
 */
const showStudent = (name) => {
    getList();
    let student = studentList.find(s => s.name == name);
    if (!student) {
        console.log('No éxiste este estudiante')
    } else {
        console.log(' Notas de ' + student.name)
        console.log(' Math: ' + student.math)
        console.log(' English: ' + student.english)
        console.log(' Program: ' + student.program + '\n')
    }
}

/**
 * Method to average of student
 */
const winMath = () => {
    getList();
    let win = studentList.filter(m => m.math >= 3);
    if (win.length == 0) {
        console.log('Ningun estudiante va ganando!!!');
    } else {
        win.forEach(element => {
            console.log(' Notas de ' + element.name)
            console.log(' Math: ' + element.math + '\n')
        });
    }
}

/**
 * Method to calculated average
 * @param {*} name 
 */
const averageStudent = (name) => {
    getList();
    let student = studentList.find(s => s.name == name);
    if (!student) {
        console.log('No éxiste este estudiante')
    } else {
        let ave = (student.math + student.english + student.program) / 3;
        student.average = ave;
        // console.log(' El promedio del estudiante es, ' + ave)
    }
}

/**
 * Method to calculate average of the list student
 */
const aveUpThree = () => {
    getList();
    studentList.forEach(element => {
        averageStudent(element.name)
    });
    let ave3 = studentList.filter(m => m.average > 3);
    ave3.forEach(element => {
        console.log(' Nombre: ' + element.name + ' Promedio: ' + element.average + '\n')
    });
}

/**
 * Method to update student
 * @param {*} name 
 * @param {*} course 
 * @param {*} score 
 */
const update = (name, course, score) => {
    getList();
    let findStudent = studentList.find(s => s.name == name);
    if (!findStudent) {
        console.log('El estudiante no éxiste!!!')
    } else {
        findStudent[course] = score;
        save();
    }
}

/**
 * Method to delete student
 * @param {*} name 
 */
const del = (name) => {
    getList();
    let newList = studentList.filter(m => m.name != name);
    console.log(newList)
    if (newList.length === studentList.length) {
        console.log('Ningun estudiante tiene el nombre ingresado!!!');
    } else {
        studentList = newList;
        save();
    }   
}

module.exports = {
    create,
    show,
    showStudent,
    winMath,
    aveUpThree,
    update,
    del
}