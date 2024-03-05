import React, { useState } from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from "axios"
import { API_END_POINT } from '../utlits/Conestent';

const Register = () => {
    const [fullName, setFullName] = useState()
    const [email, setEmail ] = useState()
    const [password, setpassword] = useState()

 
    const handlelogout = async(e) =>{
        e.preventDefault()
        const user = {fullName, email , password}
        try {
            const res = await axios.post(`https://server-site-6uoawwixr-alvin-sifats-projects.vercel.app/api/v1/register`, {
                fullName, 
                email, password
            })
            console.log(res)
            alert ("User Regitser Successfully")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='bg-image'>
            <Header />
         

         <div className='sm:w-full flex flex-col max-w-72 p-14 px-5 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'>
         <h1 className='text-3xl text-white mb-5 font-bold'>SignUp</h1>
            <form className=' ' onSubmit={handlelogout}>
                <h1 className='text-3xl text-white mb-5 font-bold'></h1>
                <div className='flex flex-col'>
                   <input  type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder='Fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                   
                    <input type='email'  value= {email } onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white  ' />
                    <input   type='password' value={ password } onChange={(e) => setpassword(e.target.password)} placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                    <button type='submit' className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>

                   SignUp
                    </button>
                    <p className='text-white mt-2'>New to Netflix? <span className='ml-1 text-blue-900 font-medium cursor-pointer'>
                        <Link to={"/login"}>
                            SignUp
                        </Link>
                        </span> </p>
                </div>
            </form>



         </div>




        </div>
    )
}

export default Register