import React, { useContext } from 'react';
import { Navigate } from 'react-router'
import UserContext from '../context/UserContext'; 


export default function AdminGuard({ element: Component, ...rest }) { 
    
    
    const { isAuthenticated, isAdmin, isLoading } = useContext(UserContext); 
    
    if (isLoading) {
        return <div>Loading user status...</div>;
    }
        if (isAuthenticated && isAdmin) {
       
        return <Component {...rest} />; 
    } else {
       
        return <Navigate to="/collection" replace />; 
    }
}