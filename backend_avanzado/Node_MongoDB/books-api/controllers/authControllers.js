import bcrypt from 'bcrypt'
import User from '../models/Users'
import jwt from 'jwt-simple'
import dotenv from 'dotenv'

const register = async (req, res) => {
try {

    //Validar que el email y el password vengan en el body
   if(!req.body.email || !req.body.password){
    return res.status(400).json({message:'email y password son requeridos'})
   }

   //Otras validaciones

   const saltRounds = 10 // El numero de veces que se aplica el algoritmo de encriptacion sobre la contrasena 

   const newPassword = await bcrypt.hash(req.body.password, saltRounds) //Encriptamos la contrasena con bcrypt

   req.body.password = newPassword // reemplazae la contrasena de texto plano por la encriptada

   const newUser = await User.create(req.body) //Creamos el usuario en la base de datos

   newUser.password = undefined // Elimnar contrasena del objeto de respuesta de la base de datos por motivos de seguridad


   return res.status(201).json({
    message: 'Usuario creado exitosamente',
    user: newUser
   })

} catch (error) {
    res.status(500).json({message:`Error creando el usuario ${error}`})
}
}


const login = async (req, res)=>{
dotenv.config({ path: "../.env" });
 //Validar que el email y el password vengan en el body
 if(!req.body.email || !req.body.password){
    return res.status(400).json({message:'email y password son requeridos'})
   }

   try {
    const user = await User.findOne({email:req.body.email})

    if(!user) {
        return res.status(404).json({message:'Usuario no encontrado'})
    }

    const isValidPassword = await bcrypt.compare(req.body.password, user.password)

    if(!isValidPassword) {
        return res.status(401).json({message:'email o password incorrectos'})
    }

    const payload = {
        email:user.email,
        role: user.role,
        iat: Math.floor(Date.now()/1000), //Fecha y hora de emision del token en segundos
        exp: Math.floor(Date.now()/1000 + (7 * 24 * 60 * 60)) //Fecha y hora de expiracion en 7 dias
    }

    const token = jwt.encode(payload, process.env.SECRET)
    return res.json({message:`Autententicacion exitosa ${token}`})

   } catch (error) {
    res.status(500).json({message: `Error en el login ${error}`})
   }
}


export {register, login}