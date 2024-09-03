import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    secondName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})



export const User = mongoose.model('User', userSchema)