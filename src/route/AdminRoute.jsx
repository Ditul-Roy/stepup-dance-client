import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import useAuth from '../hook/UseAuth';
import useAdmin from '../hook/useAdmin';

const AdminRoute = ({children}) => {
    // const {user, loading} = useAuth();
    const location = useLocation();
    const [isAdmin, adminLoading] = useAdmin();
    if( adminLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if( isAdmin){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;