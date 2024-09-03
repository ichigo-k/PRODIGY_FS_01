import express from "express";
import "dotenv/config.js";
import cors from "cors";
import mongoose from "mongoose";
import UserRouter from "./routes/user.route.js"

const app = express()


app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Hello from the backend")
})


app.use("/api", UserRouter);


const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/login_system"

app.listen(PORT,async  ()=>{
    try{
        await mongoose.connect(MONGO_URI)

        console.log("Connected to database ...")
        console.log("Server is up and running ")
    }
    catch(err){
        console.log("Something went wrong")
        console.log(err)
    }
    
})