import React, { useState } from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';


const Login = () => {
    const [fullName, setFullName] = useState()
    const [email, setEmail ] = useState()
    const [password, setpassword] = useState()

 
    const handlelogout = (e) =>{
        e.preventDefault()
        try {
            
        } catch (error) {
            
        }
    }
    return (
        <div className='bg-image'>
            <Header />
         

         <div className='sm:w-full flex flex-col max-w-72 p-14 px-5 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'>
         <h1 className='text-3xl text-white mb-5 font-bold'>Login</h1>
            <form className=' ' onSubmit={handlelogout}>
                <h1 className='text-3xl text-white mb-5 font-bold'></h1>
                <div className='flex flex-col'>
                   
                    <input type='email'  value= {email } onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white  ' />
                    <input   type='password' value={ password } onChange={(e) => setpassword(e.target.password)} placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                    <button type='submit' className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>

                   Login Now 
                    </button>
                    <p className='text-white mt-2'>Already have an account <span className='ml-1 text-blue-900 font-medium cursor-pointer'><Link to={"/register"}>
                    Login </Link></span> </p>
                </div>
            </form>



         </div>




        </div>
    )
}

export default Login