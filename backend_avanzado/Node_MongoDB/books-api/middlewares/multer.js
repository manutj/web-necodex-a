const multer = require('multer');

const storage = process.env.NODE_ENV === "production" ?
multer.memoryStorage()
:
multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, 'uploads') // Esta carpeta debemos crearla en la raiz de nuestro proyecto
	},
	filename: function(req, file, cb){
		cb(null, `${file.originalname}_${Date.now()}`)
	}
})


const multerInstance = multer({
	storage,
	limits:{
		fileSize: 5 * 1024 * 1024 // 5MB
	}
})

module.exports = multerInstance;