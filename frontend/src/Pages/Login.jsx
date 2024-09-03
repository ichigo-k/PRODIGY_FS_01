import React from 'react'
import login from "../assets/login.jpeg"
import { Mail, Eye } from 'lucide-react'
import Input from '../components/Input'
import { toast } from 'sonner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()
    const [formData, setForm] = React.useState({})

    function handleChange (event){
        setForm({ ...formData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
    
        try {
            const response = await axios.post("http://localhost:3000/api/login", formData);
            toast.success(response.data.message);
            console.log(response);

            if(response.status == 202){
                localStorage.setItem("user",JSON.stringify(response.data.user))
                navigate("/")
            }
        } catch (error) {
            // Improved error handling
            console.error("Error during registration:", error);
            toast.error("Something went wrong");
        }
    }
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-200'>

        <div className="bg-white max-md:w-full  w-[50%] p-6 rounded-md flex items-center shadow-xl" >

            <div className='xl:w-2/3 w-full flex flex-col items-center '>
            <h1 className='text-4xl font-bold text-center text-blue-500'>Welcome Back </h1>
            <p className='text-sm'>Do not have an account? <a href="/register" className='text-blue-500 hover:text-blue-400'>Register</a></p>

            <form className='mt-5 w-[20rem] space-y-4' onSubmit={handleSubmit} >
                <Input name={"email"} label={"Email"} icon={<Mail/>} change={handleChange}/>
                <Input name={"password"} label={"Password"} icon={<Eye/>} change={handleChange}/>

                <button className='w-full rounded-md drop-shadow-lg p-2 text-lg font-semibold  bg-blue-500 text-white '>
                    Login 
                </button>
            </form>



            </div>

            <div className='w-1/3 h-full hidden xl:block'>
            <img src={login} alt="login" className='w-full h-full object-cover rounded-r-md shadow-xl'/>

            </div>

        </div>

    </div>
  )
}

export default Login