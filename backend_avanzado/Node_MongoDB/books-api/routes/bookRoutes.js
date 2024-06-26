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

const bookRoutes = express.Router();

bookRoutes.post("/", isAuth, isAdmin, createBook); //Create
bookRoutes.get("/", getAllBooks); // getall
bookRoutes.get("/:bookId", getBookById); //getById
bookRoutes.patch("/:bookId", isAuth, isAdmin, updateBookById); //UpdateById
bookRoutes.delete("/:bookId", isAuth, isAdmin, deleteBookById); //Delete

export default BookRoutes;
