import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    role:{type:String, enum:['ADMIN', 'CUSTOMER'], default:'CUSTOMER'},
    isActive:{type:Boolean, default:true}},
    {timestamps: true} // agregar automáticamente createdAt y updatedAt
)

const User = mongoose.model('User', userSchema)

export default User