import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../../hook/UseAuth';

const InstrClasses = () => {

    const { user } = useAuth();
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://dance-ecademy-server.vercel.app/classes?email=${user?.email}`)
            return res.json()
        }
    })
    return (
        <div className='w-full'>
            <h4 className='text-3xl text-bold text-center'>my classes: {classes?.length}</h4>
            <p className='divider'></p>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>My class</th>
                            <th>Price</th>
                            <th>Total student</th>
                            <th>status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((clas, index) => <tr key={clas._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={clas.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{clas.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    ${clas.price}
                                </td>
                                <th>{clas.total_students > 0 ? clas.total_students : 0}</th>
                                <td>{clas.status}</td>
                                <th>
                                    <button className="btn btn-outline border-0 btn-secondary btn-xs">u</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InstrClasses;