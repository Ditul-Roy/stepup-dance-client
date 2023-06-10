import React, { useState } from 'react';
import useAuth from '../../../hook/UseAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const DanceCart = ({ dance, refetch }) => {
    const {_id, available_seats, instructor_name, image, name, total_students, price } = dance;


    // TODO:Update available_seats count number is not finished


    const [seat, setSeat] = useState(available_seats);
    // const total = cart.reduce((sum, item) => item.price + sum, 0);

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelect = () => {
        if (!user) {
            Swal.fire({
                title: 'please login first?',
                text: "your are not logged in please login first and then select the class",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'log in now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location }, replace: { replace: true } })
                }
            })
        }
        else {
            const selectedClass = {_id, available_seats, instructor_name, image, name, total_students, price, email: user?.email};
            fetch('http://localhost:5000/selects',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    // refetch()
                    if(available_seats > 0){
                        setSeat(preseat => preseat - 1)
                    } 
                }
            }) 
        }
    }

    return (
        <div className={seat === 0 ? 'card w-80 mb-10 glass bg-red-400' : 'card w-80 mb-10 glass bg-slate-200'}>
            <figure><img className='h-48' src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-xl'>Instructor: {instructor_name}</p>
                <div className='flex justify-around'>
                    <p><span className='text-bold'>Avilable seets</span>: {seat}</p>
                    <p><span className='text-bold'>Total students</span>: {total_students}</p>
                </div>
                <p>Price: ${price}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleSelect} disabled={seat === 0} className="btn btn-primary">enroll now</button>
                </div>
            </div>
        </div>
    );
};

export default DanceCart;


















 // fetch(`http://localhost:5000/dances/${id}`, {
            //     method: "PATCH"
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data.modifiedCount) {
            //             // refetch();
            //             Swal.fire({
            //                 position: 'top-end',
            //                 icon: 'success',
            //                 title: 'your class hass been selected',
            //                 showConfirmButton: false,
            //                 timer: 1500
            //               })
            //         }
            //     })
