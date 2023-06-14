
import { useQuery } from '@tanstack/react-query';
import useAuth from './UseAuth';

const useInstructor = () => {
    const { user, loading } = useAuth();
    const { data: isInstructor, isloading: instructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://dance-ecademy-server.vercel.app/users/instructor/${user?.email}`);
            return res.json()
        }
    })
    return [isInstructor, instructorLoading]
};

export default useInstructor;