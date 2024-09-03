import express from 'express';
import { User } from '../models/user.model.js';
import bcrypt from "bcrypt";

const router = express.Router();



router.route("/register").post(async(req,res)=>{
    try {
        const {Fname,Sname,email,password} = req.body;

        if(!Fname || !Sname || !email || !password){
            return res.json({message:"Please fill all fields"})
        }

        const checkIfUserExists = await User.findOne({email:email});

        if(checkIfUserExists){
            return res.json({message:"User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const user = await User.create({
            firstName:Fname,
            secondName:Sname,
            email:email,
            password:hashedPassword
        })

        const data = user.toObject();
        delete data.password;

        res.status(201).json({
            message:"User created successfully",
            user:data
        })
        
    } catch (err) {
        console.log("Something went wrong")
        res.status(500).json({
            message:"Something went wrong",
            error: err.message
        })
    }
})

router.route("/login").post(async (req,res)=>{
    try {
        const {email,password} = req.body;

        if( !email || !password){
            return res.json({message:"Please fill all fields"});
        }


        const user = await User.findOne({email:email});

        if(!user){
            return res.json({message:"User does not exist"});
        }
        

        const isAuth = await bcrypt.compare(password, user.password);

        if(!isAuth){
            return res.json({message:"Invalid Credentials"});
        }

        const data = user.toObject()
        delete data.password

        res.status(202).json({
            message:"User logged in successfully",
            user:data
        })

    } catch (err) {
        console.log("Something went wrong")
        res.status(500).json({
            message:"Something went wrong",
            error: err.message
        })
    }
})


export default router