const hbs = require('hbs');
const dataCourses = require('../../data/list-courses.json');
const dataRegisters = require('../../data/list-register.json');

hbs.registerHelper('saveCourse', (name, description, cost, modal, duration, state) => {
    let studentList = dataCourses;
    if (name && description && cost && modal && duration && state) {
        let obj = {
            name: name,
            description: description,
            cost: cost,
            modal: modal,
            duration: duration,
            state: state
        }
        studentList.push(obj);
    }
});

hbs.registerHelper('getCoursesList', (courseList) => {
    // let studentList = dataCourses;
    let studentList = courseList;
    let index = 1;
    let textStudent = ''
    studentList.forEach(element => {
        textStudent = textStudent + '<div class="row border-table"><div class="col-sm-1">' + index + '</div>' +
            '<div class="col-sm-2">' + element.name + '</div>' +
            '<div class="col-sm-3 text-truncate">' + element.description + '</div>' +
            '<div class="col-sm-1">' + element.cost + '</div>' +
            '<div class="col-sm-2">' + element.modal + '</div>' +
            '<div class="col-sm-2">' + element.duration + '</div>' +
            '<div class="col-sm-1">' + element.state + '</div></div>';
        index++;
    });
    return textStudent;
});

hbs.registerHelper('saveRegister', (document, password, name, email, phone) => {
    let registerList = dataRegisters;
    if (document && password && name && email && phone) {
        let obj = {
            document: document,
            password: password,
            name: name,
            email: email,
            phone: phone
        }
        registerList.push(obj);
    }
});

hbs.registerHelper('getRegisterList', (registerList) => {
    //let registerList = dataRegisters;
    let registersList = registerList;
    let index = 1;
    let textRegisters = ''
    registersList.forEach(element => {
        textRegisters = textRegisters + '<form action="/delete-register" method="post"><div class="row border-table padding-10">' +
            '<div class="col-sm-1">' + index + '</div>' +
            '<div class="col-sm-2">' + element.document + '</div>' +
            '<div class="col-sm-3">' + element.name + '</div>' +
            '<div class="col-sm-2">' + element.email + '</div>' +
            '<div class="col-sm-2">' + element.phone + '</div>' +
            '<div class="col-sm-1">'+
                '<button type="submit" class="btn btn-danger" name="name" value="'+element.name+'">Eliminar</button></div>' +
            '</div></form>';
        index++;
    });
    return textRegisters;
});
