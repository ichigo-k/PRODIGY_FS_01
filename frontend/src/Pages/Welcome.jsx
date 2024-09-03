import { UserCircle2 } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const [user, setUser] = React.useState({});
    const navigate = useNavigate();

    React.useEffect(() => {
        try {
            const data = localStorage.getItem("user");
            if (data) {
                // Only parse data if it's not "undefined"
                const parsedData = JSON.parse(data);
                if (parsedData) {
                    setUser(parsedData);
                } else {
                    navigate("/login");
                }
            } else {
                navigate("/login");
            }
        } catch (error) {
            console.error("Failed to parse user data from localStorage", error);
            navigate("/login");
        }
    }, [navigate]);


    function logOut(){
        navigate("/login")
        localStorage.removeItem("user");
    }

    return (
        <div className='bg-gray-200 w-full h-screen '>
            <nav className='w-full bg-white flex-col '>
                <div className='w-full bg-white p-2 flex justify-between items-center xl:px-[4rem]'>
                    <h1 className='text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent'>
                        <a href="/">BooksTube</a>
                    </h1>

                    <div className='flex items-center gap-x-2'>
                        {user.firstName} { user.secondName}
                        <UserCircle2 />
                    </div>
                </div>
                <hr />

                <div className='w-full bg-white flex items-center p-2 justify-between xl:px-[4rem]'>
                    <div className='flex gap-x-4 md:gap-x-6'>
                        <p className='text-blue-400'>Home</p>
                        <p>Books</p>
                        <p>Authors</p>
                    </div>

                    <button className='bg-red-500 text-white p-1 rounded-md' onClick={logOut}>
                        Logout
                    </button>
                </div>
            </nav>

            <div className='bg-white p-5 mt-7 xl:px-[4rem]'>
                <h2 className='text-2xl font-semibold'>Welcome {user.firstName}!</h2>
            </div>
        </div>
    );
}

export default Welcome;
