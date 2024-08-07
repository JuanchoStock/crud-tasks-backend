// Requerir Express.js para crear un servidor web

// Express es un entorno que nos permite desarrollar de manera eficiente aplicaciones web y APIS
const express = require('express');

// Crear una instancia de la aplicación Express para representar el servidor
const app = express();

const routes = require('./routes/routes.js'); // Importar el archivo de rutas
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // Parsear JSON
app.use(bodyParser.urlencoded({ extended: true })); // Parsear datos de formularios

app.use(routes);

// Iniciar el servidor y escuchar solicitudes en el puerto 3000
app.listen(4000, () => {
  console.log('El servidor está funcionando en el puerto 4000'); // Mensaje de confirmación
});