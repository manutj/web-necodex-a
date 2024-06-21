import { connect } from "./db/database.js"; //Importamos la conexion a mongo
import { carRoutes } from "./routes/routes.js";
import dotenv from "dotenv";
import express from "express";

//Dar acceso a las variables de entorno especificando la ruta del archivo .env
dotenv.config({ path: "./.env" });


// Dar acceso a los metodos de express
const api = express();

//Definimos el puerto para el servidor
const PORT = process.env.PORT || 3000;


//Desserializar correctamente las peticiones json 
api.use(express.json())

//Definimos el endopint raiz para mis rutas
api.use('/api/v1', carRoutes)


//Nois conectamos a la base de datos a traves de mi instancia de conexion
connect().then(() => {
  api.listen(PORT, () => {
    console.log(`Servidor conectado en el puerto ${PORT}`);
  });
});
