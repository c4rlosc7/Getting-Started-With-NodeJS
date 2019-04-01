const hbs = require('hbs');

hbs.registerHelper('getAverage', (n1, n2, n3) => {
    return (n1 + n2 + n3) / 3;
});

hbs.registerHelper('saveCourse', (name, description, cost, modal, duration, state) =>{
    studentList = require('./list-courses.json');
    let obj = {
        name: name,
        description: description,
        cost: cost,
        modal: modal,
        duration: duration,
        state: state
    }
    studentList.push(obj);
});

hbs.registerHelper('getCoursesList', () =>{
    studentList = require('./list-courses.json');
    let textStudent = '<b>Lista de cursos </b><br>';

    textStudent = textStudent + '  <b>Id</b> ' + 
                                '  <b>Nombre</b> ' +
                                '  <b>Descripcion</b> ' +                                     
                                '  <b>Costo</b> ' +
                                '  <b>Modalidad</b> ' +
                                '  <b>Duracion</b> ' +  
                                '  <b>Estado</b> <br>';      

    studentList.forEach(element => {
        textStudent = textStudent +  element.id + element.name + element.description +                                     
                                     element.cost + element.modal + element.duration + 
                                     element.state +'<br>';                                                                                                                                           
    });
    return textStudent;
});
