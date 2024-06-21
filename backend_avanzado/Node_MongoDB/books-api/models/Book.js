import mongoose from 'mongoose'

const genreEnum = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 'Mistery', 'Thriller', 'Romance', 'Horror', 'Poetry', 'CookBook', 'History']

const bookschema = new mongoose.Schema({
    title:{type:String, required: true},
    publishDate:{type: Date}, // YYYY-MM-DD
    publisher:{type: String, required:true},
    price:{type: Number, required: true},
    imgUrl:{type: String, required: true},
    isbn: {type: String, required:true},
    summary: String,
    genre:{type:String, required: true, enum:genreEnum},
    authors:[{type: mongoose.Schema.Types.ObjectId, ref:'Author', required:true}], // ObjectID es un tipo de dato utilizado por Mongoose para identficar documentos en MongoDB. ref: 'Author' indica que el campo authors se relaciona con el modelo Author.
    isActive: {type:Boolean, default: true}},
    {timestamps: true} // agregar automáticamente createdAt y updatedAt
)

const Book = mongoose.model('Book', bookschema)

export default Book