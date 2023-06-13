import React from 'react';
import useAuth from './UseAuth';
import { useQuery } from '@tanstack/react-query';

const useStudent = () => {
    const { user, loading } = useAuth();
    const { data: isStudent, isloading: studentLoading } = useQuery({
        queryKey: ['isStudent', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/student/${user?.email}`);
            return res.json()
        }
    })
    return [isStudent, studentLoading]
};

export default useStudent;