import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';
import logo from '../../images/carsforsale-logo.png'
const Navbar = () => {
    const {createLogout,user} = useContext(authContext)
    const handleLogout = () =>{
        createLogout()
        .then(()=>{

        })
        .catch(error=>{
            console.log(error)
        })
    }
    const menuItems =
        <>
            <li className='ml-2 bg-red-500 text-white rounded-md font-semibold'><Link to="/">Home</Link></li>
            <li className='ml-2 bg-red-500 text-white rounded-md font-semibold'><Link to="/about">About</Link></li>
            <li className='ml-2 bg-red-500 text-white rounded-md font-semibold'><Link to="/blog">Blog</Link></li>
            <li className='ml-2 bg-red-500 text-white rounded-md font-semibold'><Link to="/contact">Contact Us</Link></li>
          {user?.uid?
          
          <>
              <li className='ml-2 bg-red-500 text-white rounded-md font-semibold'><Link to="/dashboard">Dashboard</Link></li>
            <li className='ml-2 bg-red-500 text-white rounded-md font-semibold'><Link onClick={handleLogout} to="/login">Logout</Link></li>
          </>
          
          
            :<li className='ml-2 bg-red-500 text-white rounded-md font-semibold'><Link to="/login">Login</Link></li>}
        </>
    return (
        <div className="flex justify-center navbar bg-warning">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="font-semibold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className='flex items-center  '>
                    <Link className=" normal-case text-xl">
                        <img src={logo} alt="" />
                    </Link>
                    <p className='text-red-600 ml-10 text-2xl font-extrabold'>Cars For Sale</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;