import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';
import {toast} from 'react-hot-toast'
const Login = () => {
 
    const {createLogin} = useContext(authContext)
    const {register,handleSubmit,formState:{errors},reset} = useForm()
    
    const handleLogin = (data) =>{
        console.log(data)
        createLogin(data.email,data.password)
        .then(result =>{
            const user = result.user
            console.log(user)
            toast.success('login successfully')
            reset()
          
        })
        .catch(error=>{
            console.log(error)
            reset()
            toast.error('something wrong')
        })
    }
    return (
       <div className='bg-success'>
         <div className='bg-orange-400 mt-10 rounded-md w-[500px] py-16 mx-auto' style={{border:''}}>
            <div>
            <p className='mb-5 text-center text-2xl font-semibold'>Login</p>
            </div>
            <div className='max-h[800px] flex justify-center items-center'>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-96">
                    <label className="label font-semibold"><span className="label-text">Email</span></label>
                    <input type="email" {...register('email',{
                        required:'Email Is Required'
                    })} placeholder="Email Address" className="input input-bordered w-full" />
                    {errors.email && <label className='label text-red-600'>{errors.email.message}</label>}
                </div>
                <div className="form-control w-full">
                    <label className="label font-semibold"><span className="label-text">Password</span></label>
                    <input type="password" {...register('password',{
                        required:'Password Is Required',
                        minLength:{value:6,message:'Password must be six character long'}
                    })} placeholder="Password" className="input input-bordered w-full" />
                    {errors.password && <label className='label text-red-600'>{errors.password.message}</label>}
                    <label className="label font-semibold"><span className="label-text text-primary"><small><Link>Forget Password?</Link></small></span></label>
                </div>
                
                <button className='btn btn-warning w-full'>Login</button>
                <label className="label"><span className="label-text font-semibold">Have A New Account?<Link to="/signup" className='text-primary font-semibold ml-1'>Signup</Link></span></label>
            </form>
        </div>
        </div>
       </div>
    );
};

export default Login;