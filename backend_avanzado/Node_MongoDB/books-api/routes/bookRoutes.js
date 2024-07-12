import express from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
} from "../controllers/bookControllers.js";

import isAuth from "../middlewares/isAuth.js";
import isAdmin from "../middlewares/isAdmin.js";

const multerInstance = require("../middlewares/multer.js")
const manageFiles = require("../middlewares/manageFiles.js")

const bookRoutes = express.Router();

//Utilizamos esta ruta para ejecutar nuestros middlewares, podemos utilizar los que creamos convenientes
bookRoutes.post("/", isAuth, isAdmin, multerInstance.single('imgUrl'), manageFiles, createBook); //Create
bookRoutes.get("/", getAllBooks); // getall
bookRoutes.get("/:bookId", getBookById); //getById
bookRoutes.patch("/:bookId", isAuth, isAdmin, updateBookById); //UpdateById
bookRoutes.delete("/:bookId", isAuth, isAdmin, deleteBookById); //Delete

export default BookRoutes;
