import Author from "../models/Author";
import Book from "../models/Book";

const storage = require('../utils/storage.js')

const createBook = async (req, res) => {

    //Logica para recibir el req.file desde el cliente y que la captura el middleware multer
    //Pasa al archivo de storage.js que se encarga de hacer la conexion con Firebase y se sube el archivo
    //Se recibe la URL del archivo desde firebase y la agregamos al body para que se almacene en la base de datos

    // if(req.file){
    //   const url = await storage(req.file)
    //   req.body.imgUrl = url
    // }

  //Las lineas anteriores las hemos comentado debido a que ahora se maneja desde el middleware manageFiles

    const bookData = req.body

    if(Object.keys(bookData).length === 0){
        return res.status(400).json({message:'No hay datos en el libro'})
    }

    if(!bookData.authors){
        return res.status(400).json({message:'Deben haber autores en el libro'})
    }

    if(!Array.isArray(bookData.authors)){
        return res.status(400).json({message:'Los autores deben ser un array'})
    }


    try {
        const authorArray = await Promise.all(bookData.authors.map(async author=>{
            const existingAuthor = Author.findOne({firstName: author.firstName, lastName: author.lastName, birthDate:author.birthDate})

            if(existingAuthor){
                return existingAuthor
            }
            const newAuthor = new Author(author)
            return await Author.create(newAuthor)
        }))

        bookData.authors = authorArray.map(author=>author._id)

        const newBook = await Book.create(bookData)
        res.status(201).json(newBook)

    } catch (error) {
        res.status(500).json({message:`Error al crar el libro ${error}`})
    }


};
const getAllBooks = async (req, res) => {
    try {
        const books = await Book
          .find({ isActive: true })
          .populate('authors') // Lo utilizamos para poder completar la informacion del campo authors de la coleccion Book con los datos que tiene la coleccion Author
        if (!books) {
          return res.status(404).json({ error: 'No se encontraron libros' })
        }
        res.status(200).json(books)
      } catch (err) {
        res.status(400).json({ error: err.message })
      }
};
const getBookById = async (req, res) => {
    // Valido que el ID sea un ObjectID válido de MongoDB (24 caracteres alfanuméricos)
  if (!req.params.bookId.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ error: 'Id de libro invalido' })
  }

  try {
    const book = await Book
      .find({ _id: req.params.bookId, isActive: true })
      .populate('authors') // Lo utilizamos para poder completar la informacion del campo authors de la coleccion Book con los datos que tiene la coleccion Author
    if (!book) {
      return res.status(404).json({ error: 'No se encontro el libro' })
    }
    res.status(200).json(book)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
};
const updateBookById = async (req, res) => {
    // Valido que el ID sea un ObjectID válido de MongoDB (24 caracteres alfanuméricos)
  if (!req.params.bookId.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ error: 'Id de libro invalido' })
  }

  try {
    const book = await Book
      .findByIdAndUpdate(req.params.bookId, req.body, { new: true })
      .populate('authors') // Lo utilizamos para poder actualizar la informacion de la coleccion de Author con los datos que mandamos desde el campo authors en la coleccion de Book
    if (!book) {
      return res.status(404).json({ error: 'Error al actualizar: No se encontro el libro' })
    }
    res.status(200).json(book)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
};
const deleteBookById = async (req, res) => {
    // Valido que el ID sea un ObjectID válido de MongoDB (24 caracteres alfanuméricos)
  if (!req.params.bookId.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ error: 'Id de libro invalido' })
  }

  // Delete fisico: Si el query ?destroy=true, se hace un hard delete, es decir, se elimina el documento de la base de datos
  if (req.query.destroy === 'true') {
    try {
      const book = await Book.findByIdAndDelete(req.params.bookId)
      if (!book) {
        return res.status(404).json({ error: 'Error al eliminar: No se encontro el libro' })
      }
      return res.status(204).end()
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }
  // Delete logico: Si el query destroy no es true, se hace un soft delete, es decir, se cambia el campo isActive a false
  try {
    const book = await Book.findByIdAndUpdate(req.params.bookId, { isActive: false }, { new: false }) // Aca no necesitamos un populate puesto que solo actualizamos la propiedad IsActive 
    if (!book || book.isActive === false) {
      return res.status(404).json({ error: 'Error al eliminar: No se encontro el libro' })
    }
    res.status(204).end()
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
};

export { createBook, getAllBooks, getBookById, updateBookById, deleteBookById };
