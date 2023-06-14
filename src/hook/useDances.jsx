import React from 'react';
import { useQuery } from '@tanstack/react-query'

const useDances = () => {
    const {refetch, data: dances = [] } = useQuery({
        queryKey: ['dances',],
        queryFn: async () => {
            const res = await fetch('https://dance-ecademy-server.vercel.app/dances');
            return res.json()
        }
    })
    return [dances, refetch]
};

export default useDances;