import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const connect = async () => {
  mongoose.connect(process.env.URI_DB);
  const { connection } = await mongoose;

  connection.once("open", () => console.log("Conectado a la base de datos"));
  connection.on("error", () =>
    console.log("Hubo error de conexion a la base de datos")
  );
};

export { connect };
