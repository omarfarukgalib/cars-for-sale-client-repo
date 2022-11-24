import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';
import {toast} from 'react-hot-toast'
const Signup = () => {
    
    const {createUser,userUpdate} = useContext(authContext)
    const {register,handleSubmit,formState:{errors},reset} = useForm()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.form?.pathname || '/'
    const handleLogin = (data) =>{
        console.log(data)
        createUser(data.email,data.password)
        .then(result=>{
            const user = result.user
            console.log(user)
            toast.success('signup successfully')
            reset()
            const userInfo = {
                displayName :data.name
            }
            userUpdate(userInfo)
            .then(()=>{
                navigate(from,{replace:true})
            })
            .catch(error=>{
                console.log(error)
                toast.error('something wrong')
            })
        })
        .catch(error=>{
            console.error(error)
            toast.error('something wrong')
        })
    }
    return (
       <div className='bg-success'>
         <div className='bg-orange-400  mt-4 rounded-md w-[500px]  py-6 mx-auto' style={{border:''}}>
            <div>
            <p className='text-center text-2xl font-semibold'>Signup</p>
            </div>
            <div className='max-h[800px] flex justify-center items-center'>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-96">
                    <label className="label font-semibold"><span className="label-text">Full Name</span></label>
                    <input type="text" {...register('name',{
                        required:'Full Name Is Required'
                    })} placeholder="Full Name" className="input input-bordered w-full" />
                    {errors.name && <label className='label text-red-600'>{errors.name.message}</label>}
                </div>
                <div className="form-control w-full">
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
                   
                </div>
                
                <button className='mt-2 btn btn-warning w-full'>Signup</button>
                {/* <hr /><br /> */}
                <p className='text-center font-semibold'>OR</p>
                
                <button className='mt-3 btn btn-warning w-full'>
                
                    Google</button>
                <label className="label"><span className="label-text font-semibold">Already Have An Account?<Link to="/login" className='text-primary font-semibold ml-1'>Login</Link></span></label>
            </form>
        </div>
        </div>
       </div>
    );
};

export default Signup;