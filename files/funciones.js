const fs = require('fs');
studentList = [];

const create = (studentIn) => {
    getList();
    let student = {
        name: studentIn.name,
        math: studentIn.math,
        english: studentIn.english,
        program: studentIn.program
    };
    let duplicate = studentList.find(n => n.name == studentIn.name);
    if (!duplicate){
        studentList.push(student);
        // console.log(studentList);
        save();        
    }else{
        console.log('Ya éxiste el estudiante!!!');
    }
}

const getList = () => {
    try {
        studentList = require('./list.json');
        // studentList = JSON.parse(fs.readFileSync('list.json'));        
    } catch (error) {
        studentList = [];
    }
}

const save = () => {
    let data = JSON.stringify(studentList);
    fs.writeFile('list.json', data, (err) => {
        if (err) throw (err);
        console.log('Archivo creado éxitosamente!!!')
    });
}

const show = () =>{
    getList();
    studentList.forEach(element => {
        console.log(' Notas de ' + element.name)
        console.log(' Math: ' + element.math)
        console.log(' English: ' + element.english)
        console.log(' Program: ' + element.program + '\n')
    });
}

const showStudent = (n) => {
    getList();
    let student = studentList.find(s => s.name == n.name);
    if (!student){
        console.log('No éxiste este estudiante')
    }else{
        console.log(' Notas de ' + student.name)
        console.log(' Math: ' + student.math)
        console.log(' English: ' + student.english)
        console.log(' Program: ' + student.program + '\n')
    }    
}


module.exports = {
    create,
    show,
    showStudent
}