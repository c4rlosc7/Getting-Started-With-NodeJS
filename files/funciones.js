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
    let student = studentList.find(s => s.name == n);
    if (!student){
        console.log('No éxiste este estudiante')
    }else{
        console.log(' Notas de ' + student.name)
        console.log(' Math: ' + student.math)
        console.log(' English: ' + student.english)
        console.log(' Program: ' + student.program + '\n')
    }    
}

const winMath = () =>{
    getList();
    let win = studentList.filter(m => m.math >= 3);
    if (win.length == 0){
        console.log('Ningun estudiante va ganando!!!');
    }else{
        win.forEach(element => {
            console.log(' Notas de ' + element.name)
            console.log(' Math: ' + element.math + '\n')
        });
    }
}

const averageStudent = (n) => {
    getList();
    let student = studentList.find(s => s.name == n);
    if (!student){
        console.log('No éxiste este estudiante')
    }else{
        let ave = (student.math + student.english + student.program) / 3;
        student.average = ave;
        console.log(' El promedio del estudiante es, ' + ave)
    }    
}

const aveUpThree = () =>{
    getList();    
    studentList.forEach(element => {
        averageStudent(element.name)      
    });
    let ave3 = studentList.filter(m => m.average > 3);
    ave3.forEach(element => {
        console.log(' Promedio de encina de 3' + element.name)
        console.log(' Promedio: ' + element.average + '\n')  
    });    
}

module.exports = {
    create,
    show,
    showStudent,
    winMath,
    averageStudent,
    aveUpThree
}