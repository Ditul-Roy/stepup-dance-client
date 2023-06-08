import React from 'react';
import { useQuery } from '@tanstack/react-query'

const useDances = () => {
    const {refetch, data: dances = [] } = useQuery({
        queryKey: ['dances',],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/dances');
            return res.json()
        }
    })
    return [dances, refetch]
};

export default useDances;