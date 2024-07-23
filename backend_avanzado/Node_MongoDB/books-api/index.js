import { connect } from "./db/database.js"; //Importamos la conexion a mongo
import dotenv from "dotenv";
import express from "express"
import morgan from 'morgan'
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

//Dar acceso a las variables de entorno especificando la ruta del archivo .env
dotenv.config({ path: "./.env" });


// Dar acceso a los metodos de express
const api = express();

// api.use(morgan('tiny'))
 
//Tokens de morgan personalizados
morgan.token('body', (req)=>JSON.stringify(req.body))
morgan.token('host', (req)=>req.hostname)
morgan.token('params', (req, res, param)=>req.params ? req.params[param] : null)

//Usamos morgan para loggear las peticiones a nuestras rutas HTTP
api.use(morgan(':host :method :url :status :params[id] - response-time ms - :date :body'))

//Definimos el puerto para el servidor
const PORT = process.env.PORT || 3000;


// //Desserializar correctamente las peticiones json 
// api.use(express.json())

// //Definimos el endopint raiz para mis rutas
// api.use('/api/v1', carRoutes)

api.use('/api/v1', authRoutes)
bookRoutes(api)



//Nois conectamos a la base de datos a traves de mi instancia de conexion
connect().then(() => {
  api.listen(PORT, () => {
    console.log(`Servidor conectado en el puerto ${PORT}`);
  });
});
