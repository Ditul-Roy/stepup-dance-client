import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const ManageUser = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res =await fetch('http://localhost:5000/users');
            return res.json()
        }
    })
    const makeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                refetch();
            }
        })
    }

    const makeInstructor = id => {
        fetch(`http://localhost:5000/users/instructor/${id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                refetch();
            }
        })
    }
    return (
        <div className='w-full mx-10'>
            <h4 className='text-xl text-center '>this is manage user</h4>
            <div className="">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>email</th>
                            <th>role</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user?.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user?.email}
                                </td>
                                <td>{user?.role ? user.role : 'student'}</td>
                                <th>
                                    <button onClick={()=>makeAdmin(user._id)} className='btn btn-xs btn-warning' disabled={user.role === 'admin'}>admin</button>
                                    <button onClick={()=>makeInstructor(user._id)} disabled={user.role === 'instructor'} className= 'btn btn-warning btn-xs'>instructor</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;