import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({children}) => {
    const {user} =useSelector((store)=>store.user);
    if(!user){
        return <Navigate to='home'/>;
    }
    return children;
};

export default ProtectedRoute;