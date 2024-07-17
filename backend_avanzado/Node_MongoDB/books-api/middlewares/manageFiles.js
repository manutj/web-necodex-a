import uploadImage from '../utils/storage.mjs'
export default (req,res,next) => {

//Guarda la URL de Firebase en el campo imgUrl del body de la peticion
    if(process.env.NODE_ENV === "production"){
        if(!req.file) return next()
        const url = uploadImage(req.file);
        req.body.imgUrl = url;
    }else{

    	//Guarda el protocolo, host y ruta del archivo en mi computadora en el campo imgUrl del body de la peticion
        if(!req.file) return  next();
        req.body.imgUrl = `${req.protocol}://${req.host}/${req.file.path}` // en path viene la ubicacion de mi archivo dentro de mi servidor 
    }
    next();
}