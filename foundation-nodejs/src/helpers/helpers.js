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

hbs.registerHelper('getCoursesList', () => {
    let studentList = dataCourses;
    let index = 1;
    let textStudent = ''
    studentList.forEach(element => {
        textStudent = textStudent + '<div class="row border-table"><div class="col-sm-1">' + index + '</div>' +
            '<div class="col-sm-2">' + element.name + '</div>' +
            '<div class="col-sm-3">' + element.description + '</div>' +
            '<div class="col-sm-1">' + element.cost + '</div>' +
            '<div class="col-sm-2">' + element.modal + '</div>' +
            '<div class="col-sm-2">' + element.duration + '</div>' +
            '<div class="col-sm-1">' + element.state + '</div></div>';
        index++;
    });
    return textStudent;
});

hbs.registerHelper('saveRegister', (document, name, email, phone) => {
    let registerList = dataRegisters;
    if (document && name && email && phone) {
        let obj = {
            document: document,
            name: name,
            email: email,
            phone: phone
        }
        registerList.push(obj);
    }
});

hbs.registerHelper('getRegisterList', () => {
    let registerList = dataRegisters;
    let index = 1;
    let textRegisters = ''
    registerList.forEach(element => {
        textRegisters = textRegisters + '<div class="row border-table">' +
            '<div class="col-sm-1">' + index + '</div>' +
            '<div class="col-sm-2">' + element.document + '</div>' +
            '<div class="col-sm-3">' + element.name + '</div>' +
            '<div class="col-sm-2">' + element.email + '</div>' +
            '<div class="col-sm-2">' + element.phone + '</div>' +
            '<div class="col-sm-1">ELIMINAR</div>' +
            '</div>';
        index++;
    });
    return textRegisters;
});
