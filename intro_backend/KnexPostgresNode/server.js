const express = require("express");
const app = express();
const dotenv = require("dotenv");
const Pool = require("pg").Pool;

//Import la carpeta queries que es donde hacemos las consultas a los endpoints
const router = require("./queries");

//Damos acceso a las variables de entorno
dotenv.config({path:'./.env'});

//Definimos el puerto desde las variables
const PORT = process.env.PORT || 3000;

//Definimos un entorno de desarrollo
const isProduction = process.env.NODE_ENV === "production";


//definimos la cadena de conexion a la base de datos para el pg
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB}`;


//Establecemos el Pool de conexion para pg
const pool = new Pool({
  connectionString: isProduction ? process.env.DB_URL : connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

//definimos la ruta raiz de nuestra api
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`aplicacion corriendo en el puerto ${PORT}`);
});

module.exports = pool;
