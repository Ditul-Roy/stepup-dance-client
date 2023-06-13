import React from 'react';
import useDances from '../../../../../hook/useDances';
import { Link } from 'react-router-dom';
import useAdmin from '../../../../../hook/useAdmin';

const ManageClass = () => {
    const [dances, refetch] = useDances();
    const [isAdmin] = useAdmin();
    // console.log(dances);
    console.log(isAdmin);

    const aprovedClass = id => {
        fetch(`http://localhost:5000/classes/aproved/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                }
            })
    }
    const deniedClass = id => {
        fetch(`http://localhost:5000/classes/denied/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                }
            })
    }

    return (
        <div className='w-full'>
            <h4 className='text-2xl text-center'>Instructors class management</h4>
            <p className='divider my-4'></p>
            <div className="">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Class</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Avilable seats</th>
                            <th>Price</th>
                            <th>status</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dances.map((dance, index) => <tr key={dance._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={dance?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{dance?.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {dance?.instructor_name}
                                </td>
                                <td>{dance.email}</td>

                                <td>{dance.available_seats}</td>
                                <td>${dance.price}</td>
                                <td className='flex'>
                                    {dance.status}
                                </td>
                                <td>
                                    <button onClick={() => aprovedClass(dance._id)} className='btn btn-xs btn-warning ' disabled={dance.status === 'aproved'}>aprove</button>
                                    <button onClick={() => deniedClass(dance._id)} className='btn btn-xs btn-warning my-2' disabled={dance.status === 'denied'}>dany</button>
                                    <button className='btn btn-xs btn-warning'><Link to='/dashboard/feedback'>feedback</Link></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;