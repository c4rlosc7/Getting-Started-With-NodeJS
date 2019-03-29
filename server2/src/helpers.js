const hbs = require('hbs');

hbs.registerHelper('getAverage', (n1, n2, n3) => {
    return (n1 + n2 + n3) / 3;
});