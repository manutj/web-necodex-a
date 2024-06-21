import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    bio: String,
    birthDate: Date,
    isActive: {type:Boolean, default: true}},
    {timestamps: true} // agregar automáticamente createdAt y updatedAt
)

const Author = mongoose.model('Author', authorSchema)

export default Author