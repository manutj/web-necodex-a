const express = require("express");
const app = express();
const dotenv = require("dotenv");
const Pool = require("pg").Pool;

const router = require("./queries");

dotenv.config();

const PORT = process.env.PORT || 3000;

const isProduction = process.env.NODE_ENV === "production";

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB}`;

const pool = new Pool({
  connectionString: isProduction ? process.env.DB_URL : connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`aplicacion corriendo en el puerto ${PORT}`);
});

module.exports = pool;
