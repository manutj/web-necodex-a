//Importamos la libreria de knex para que interprete la consulta en lenguaje Javascript que viene desde la capa del modelo, a lenguaje SQL
const knex = require('knex')

//Importamos el archivo de configuracion de conexion a la base de datos
const knexfile = require('./knexfile')

//Enviar el de archivo de configurcion de conexion a la base de datos y aqui ya vienen los datos que queremos insertar desde el modelo. Se escoge una conexion de produccion de desarrollo
const db = knex(knexfile.production)


module.exports = db