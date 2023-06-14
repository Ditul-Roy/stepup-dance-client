import React, { useState } from 'react';
import useSelects from '../../../../hook/useSelects';
import { FaTrash, FaWallet } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Payment from '../Payment/Payment';
import { redirect } from 'react-router-dom';

const MyClass = () => {
    const [selects, refetch] = useSelects();
    const [pay, setPay] = useState({});
    const [hide, setHide] = useState(true);

    const handlePay = id => {
        const payment = selects.find(s => s._id === id)
        setPay(payment);
        setHide(false);
        console.log(payment);
        redirect('/dashboard/payment')

    }

    const handleDelete = select => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://dance-ecademy-server.vercel.app/selects/${select._id}`,{
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
              })
            }
          })
    }

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
                                   ${select.price}
                                </td>
                                <td><button onClick={()=>handlePay(select._id)} className='btn btn-outline border-0 btn-xs btn-warning'><FaWallet></FaWallet></button></td>
                                <th>
                                    <button onClick={()=>handleDelete(select)} className="btn btn-outline border-0 btn-secondary btn-xs"><FaTrash></FaTrash></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className={hide === true ? 'hidden' : 'block'}><Payment pay={pay}></Payment></div>
        </div>
    );
};

export default MyClass;