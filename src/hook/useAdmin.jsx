import React from 'react';
import useAuth from './UseAuth';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const { user, loading } = useAuth();
    const { data: isAdmin, isloading: adminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://dance-ecademy-server.vercel.app/users/admin/${user?.email}`);
            return res.json()
        }
    })
    return [isAdmin, adminLoading]
};

export default useAdmin;