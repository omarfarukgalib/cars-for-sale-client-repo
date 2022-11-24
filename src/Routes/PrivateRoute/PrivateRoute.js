import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation()
   const {user,loading} = useContext(authContext)
   if(loading){
    return <div><span className="visually-hidden">Loading...</span></div>
   }
   if(user){
    return children
   }
   return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;