const hbs = require('hbs');

hbs.registerHelper('getAverage', (n1, n2, n3) => {
    return (n1 + n2 + n3) / 3;
});

hbs.registerHelper('getStudentList', () =>{
    studentList = require('./list.json');
    let textStudent = '<b>Lista de estudiantes </b><br>';

    studentList.forEach(element => {
        textStudent = textStudent + '  <b>Nombre</b> ' + element.name +
                                    ', <b>Matematicas:</b> ' + element.math + 
                                    ', <b>Ingles:</b> ' + element.english +                                     
                                    ', <b>Programación:</b> ' + element.program + '<br>';
    });
    return textStudent;
});