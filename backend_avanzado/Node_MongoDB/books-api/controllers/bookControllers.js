import Author from "../models/Author";
import Book from "../models/Book";

const createBook = async (req, res) => {

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
const getAllBooks = () => {};
const getBookById = () => {};
const updateBookById = () => {};
const deleteBookById = () => {};

export { createBook, getAllBooks, getBookById, updateBookById, deleteBookById };
