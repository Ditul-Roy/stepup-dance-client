import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useInstructors = () => {
    const {refetch, data: instructors = [], isLoading } = useQuery({
        queryKey: ['instructors',],
        queryFn: async () => {
            const res = await fetch('https://dance-ecademy-server.vercel.app/instructors');
            return res.json()
        }
    })
    // {instructors.map(i => console.log(i))}
    return [instructors,isLoading, refetch]
};

export default useInstructors;