const hbs = require('hbs');
const data = require('../data/list-courses.json');

hbs.registerHelper('saveCourse', (name, description, cost, modal, duration, state) =>{
    studentList = data;
    console.log(name)
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

hbs.registerHelper('getCoursesList', () =>{
    studentList = data;
    let textStudent = '<div class="row">'
    studentList.forEach(element => {
        textStudent = textStudent + '<div class="col-sm-1">' + element.id + '</div>' + 
                    '<div class="col-sm-2">' + element.name + '</div>' + 
                    '<div class="col-sm-3">' + element.description + '</div>' + 
                    '<div class="col-sm-1">' + element.cost + '</div>' +  
                    '<div class="col-sm-2">' + element.modal + '</div>' +  
                    '<div class="col-sm-2">' + element.duration + '</div>' +  
                    '<div class="col-sm-1">' + element.state + '</div>';                                                                                                                                      
    });
    textStudent = textStudent+ '</div>';
    return textStudent;
});
