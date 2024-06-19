import { connect } from "./db/database.js";
import dotenv from "dotenv";
import express from "express";

dotenv.config({ path: "./.env" });

const api = express();
const PORT = process.env.PORT || 3000;

connect().then(() => {
  api.listen(PORT, () => {
    console.log(`Servidor conectado en el puerto ${PORT}`);
  });
});
