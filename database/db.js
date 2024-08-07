const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tasks_db'
});

if (connection) {
    console.log(' Se conecto correctamente la base de datos');
} else {
    console.error (' Falló en conectar la base de datos.', error);

}

module.exports = connection;

