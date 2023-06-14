import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useInstructor from '../hook/useInstructor';

const InstructorRoute = ({children}) => {
    const location = useLocation();
    const [isInstructor, instructorLoading] = useInstructor();
    if( instructorLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if( isInstructor){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default InstructorRoute;