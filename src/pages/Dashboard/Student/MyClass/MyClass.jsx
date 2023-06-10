import React from 'react';
import useSelects from '../../../../hook/useSelects';
import { FaTrash, FaWallet } from 'react-icons/fa';

const MyClass = () => {
    const [selects] = useSelects();
    return (
        <div>
            <h3 className='text-3xl text-bold text-gray-600 text-center'>My selected class is : {selects.length}</h3>
            <div className='divider'></div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                               #
                            </th>
                            <th>Dance</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selects.map((select, index) => <tr key={select._id}>
                                <td>
                                    {index + 1 }
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={select.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{select.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {select.instructor_name}
                                </td>
                                <td>
                                   {select.total_students}
                                </td>
                                <td><button className='btn btn-outline border-0 btn-xs btn-warning'><FaWallet></FaWallet></button></td>
                                <th>
                                    <button className="btn btn-outline border-0 btn-secondary btn-xs"><FaTrash></FaTrash></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;