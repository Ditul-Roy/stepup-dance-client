import React from 'react';
import useAuth from './UseAuth';
import { useQuery } from '@tanstack/react-query';

const useSelects = () => {

    const {user} = useAuth();
    const {refetch, data: selects = []} = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
           const res =await fetch(`https://dance-ecademy-server.vercel.app/selects?email=${user?.email}`);
            return res.json()
        }   
    })
    return [selects, refetch] 
};

export default useSelects;