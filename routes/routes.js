const express = require('express');
const router = express.Router(); // Crea un router express

const{ todasLasTareas,tareaPorId,actualizarTarea,crearTarea,eliminarTarea} = require ('../controllers/controllers');

router.get('/tareas', todasLasTareas); // obtener todas las tareas
router.get('/tareas/:id', tareaPorId); // obtener tarea por id
router.put('/tareas/:id', actualizarTarea); // actualizar datos de tarea
router.post('/tareas', crearTarea); // crear nueva tarea
router.delete('/tareas/:id', eliminarTarea); // eliminar tarea

// Exporta el router para poder importarlo en el archivo principal
module.exports = router;