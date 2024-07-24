// import {createRequire} from "module"
// const require = createRequire(import.meta.url)

// const {Storage} = require('@google-cloud/storage')

const {Storage} = require('@google-cloud/storage')

//Configuramos la conexion

const storage = new Storage({
	projectId: "upload-node-db", //Desde Firebase
	keyFileName: "service.json", //Desde Google Cloud Platform
})


const bucket = storage.bucket("upload-node-db.appspot.com")


export default (file)=>{
return new Promise((resolve, reject)=>{
	if(!file) reject("No hay ningun archivo")

		const newFileName = `${file.originalname}` // Renombramos el archivo

		const fileUpload = bucket.file(newFileName) //Crear un archivo nuevo en el bucket


		//Indico que al stream de datos le mandare los pedacitos de mi archivo (por partes)
		const blobStream = fileUpload.createWriteStream({
			metadata:{
				contentType: file.mimeType // Que tipo de archivo voy a mandar
			}
		})

		blobStream.on('error', (error)=>{
			reject(error) // Si ocurre un error en la subida, la promesa regresa el error
		})

		blobStream.on('finish', ()=>{
			const url = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${fileUpload.name}?alt=media`
			resolve(url)
			//Si todo sale bien, la promesa devuelve la url de mi archivo
		})


		blobStream.end(file.buffer); // Hacemos la transmision de datos del backend al bucket 

})
}