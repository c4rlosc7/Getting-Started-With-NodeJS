const hbs = require('hbs');

hbs.registerHelper('getAverage', (n1, n2, n3) => {
    return (n1 + n2 + n3) / 3;
});

hbs.registerHelper('saveCourse', (name, description, cost, modal, duration, state) =>{
    studentList = require('./list-courses.json');
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
    studentList = require('./list-courses.json');
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
    textStudent + '</div>';
    return textStudent;
});
