let cloudMongoDB = false;
let urlDB;

const PORT = process.env.PORT || 3000;

if (!cloudMongoDB) {
    urlDB = 'mongodb://localhost:27017/db_node_uda';
} else {
    urlDB = 'mongodb+srv://nodejstdea:nodejstdea@nodejstda-kq83j.mongodb.net/db_node_uda?retryWrites=true';
}

const PORT_URLDB = urlDB;

module.exports = {
    PORT,
    PORT_URLDB
}
