import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://dance-ecademy-server.vercel.app/users');
            return res.json()
        }
    })
    return [users, refetch]
};

export default useUsers;