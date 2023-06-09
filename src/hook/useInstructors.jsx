import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useInstructors = () => {
    const {refetch, data: instructors = [] } = useQuery({
        queryKey: ['instructors',],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/instructors');
            return res.json()
        }
    })
    return [instructors, refetch]
};

export default useInstructors;