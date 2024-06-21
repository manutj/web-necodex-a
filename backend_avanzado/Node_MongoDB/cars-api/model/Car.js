import mongoose from "mongoose";


//El esquema define como se contruye el documento con sus campos, tipos de datos y restricciones
const carSchema = new mongoose.Schema({
  plate: { type: String, required: true, unique: true },
  year: { type: Number, required: true },
  model: { type: String, required: true },
  brand: { type: String, required: true },
  version: String,
  color: {
    type: String,
    required: true,
    enum: [
      "red",
      "black",
      "blue",
      "white",
      "silver",
      "gray",
      "green",
      "yellow",
      "purple",
      "pink",
      "orange",
    ],
  },
  carType: {
    type: String,
    required: true,
    enum: [
      "sedan",
      "hatchback",
      "suv",
      "convertible",
      "pickup",
      "bus",
      "sport",
      "van",
    ],
    newCar: { type: Boolean, required: true },
    isActive: { type: Boolean, default: true },
  },
});


//Invocamos al modelo de mongoose para pasarle el esquema y exportarlo al controlador
const Car = mongoose.model("Car", carSchema);

export default Car;
