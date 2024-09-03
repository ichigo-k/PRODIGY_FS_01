import React from 'react'
import register from "../assets/register.jpg"
import { Eye, Mail, User2Icon } from 'lucide-react'
import Input from '../components/Input'
import axios from 'axios'
import { toast } from "sonner"
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate()

    const [formData, setForm] = React.useState({})

    function handleChange (event){
        setForm({ ...formData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
    
        try {
            const response = await axios.post("http://localhost:3000/api/register", formData);
            toast.success(response.data.message);
            console.log(response);

            if (response.status == 201){
               navigate("/login")
            }
        } catch (error) {
            // Improved error handling
            console.error("Error during registration:", error);
            toast.error("Something went wrong");
        }
    }
    
  return (
    <div className='w-full h-screen flex items-center'>
        <div className='xl:w-1/2 hidden xl:block '>
                <img src={register} alt=""  className='object-cover w-full h-screen '/>
        </div>

        <div className='xl:w-1/2 w-full flex justify-center items-center flex-col'>
            <h1 className='text-4xl font-bold text-center text-blue-500'>Create an Account </h1>
            <p className='text-sm'>Already have an account? <a href="/login" className='text-blue-500 hover:text-blue-400'>Login</a></p>

            <form onSubmit={handleSubmit} className='mt-5 w-[25rem] space-y-4'>
                <Input name={"Fname"} label={"FirstName"} icon={<User2Icon/>} change={handleChange}/>
                <Input name={"Sname"} label={"SecondName"} icon={<User2Icon/>} change={handleChange}/>
                <Input name={"email"} label={"Email"} icon={<Mail/>} change={handleChange}/>
                <Input name={"password"} label={"Password"} icon={<Eye/>} change={handleChange}/>

                <button className='w-full rounded-md drop-shadow-lg p-2 font-semibold text-md bg-blue-500 text-white '>
                    Create Account 
                </button>

            </form>

        </div>

    </div>
  )
}

export default Register