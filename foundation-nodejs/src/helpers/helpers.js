const hbs = require('hbs');
const dataCourses = require('../../data/list-courses.json');
const dataRegisters = require('../../data/list-register.json');

hbs.registerHelper('saveCourse', (name, description, cost, modal, duration, state, imagen) => {
    let studentList = [];
    if (name && description && cost && modal && duration && state && imagen) {
        let obj = {
            name: name,
            description: description,
            cost: cost,
            modal: modal,
            duration: duration,
            state: state,
            imagen: imagen
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
        let imagen = element.imagen.toString('base64');
        textStudent = textStudent + 
            '<div class="row border-table">' + 
                '<div class="col-sm-3">' +
                    '<div class="row">' + 
                        '<div class="col-sm-12"><img src="data:img/png;base64,' + imagen + '" class="img-course"></div>' +
                    '</div>' +
                '</div>' +
                '<div class="col-sm-9">' +
                    '<div class="row"><b>' + element.name + '</b></div>' +
                    '<div class="row">' + element.description + '</div>' +
                    '<div class="row"><b>$' + element.cost + '</b></div>' +
                    '<div class="row">' +
                        '<div class="col-sm-4 padding-0"><label class="c-modalidad">' + element.modal + '</label></div>' +
                        '<div class="col-sm-4">' + element.duration + 'Horas</div>' +
                        '<div class="col-sm-4">' + element.state + '</div>' +
                    '</div>' +
                '</div>' +
            '</div><br>';
        index++;
        imagen = ''
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
