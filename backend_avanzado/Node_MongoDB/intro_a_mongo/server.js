const mongoose = require('mongoose')
const { Schema } = mongoose;
const express = require('express')
const app = express()


const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://manu:yUpHq19066DsTOkt@testdevf.miyxbpt.mongodb.net/').then(()=>{
    console.log('Conectado a la base de datos')
})

.catch(()=>{
    console.log('Error al conectarse a la base de datos')
})



const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});


const breakFastSchema = new Schema({
    huevos:{
        type:Number,
        min:[6, "No son suficientes huevos, mandaste {VALUE}"],
        max:[12, "Son muchos huevos, mandaste {VALUE}"],
    },
    tocino:{type:Number, required: [true, "Debes colocar tocino"]}, 
    bebida:{
        type: String,
        enum:{
            values:["Cafe", "Malteada"],
            message:"{VALUE} no esta permitido"
        },
        required:[
            function() {
               return this.tocino > 3
            },
           "La bebida es requerida porque pediste mas de 3 tocinos" 
        ]
    }
})

const breakFastModel = mongoose.model("Desayuno", breakFastSchema)

const lunch = new breakFastModel({
    huevos:6,
    tocino:4,
    bebida:"Soda"
})

lunch.save().then(()=>{
    console.log('El registro se ha guardado con exito')
})
.catch((error)=>{
    console.log('Ocurrio un error al guardar el registro', error)
})

app.listen(PORT, () => {
    console.log(`aplicacion corriendo en el puerto ${PORT}`);
  });
  



