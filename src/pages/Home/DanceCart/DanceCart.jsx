import React from 'react';
import useAuth from '../../../hook/UseAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const DanceCart = ({ dance }) => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelect = () => {
        if(!user){
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
                    navigate('/login', {state: {from: location}, replace: {replace: true}})
                }    
              })
        }
    }

    // console.log(dance);
    const {available_seats, instructor_name, image, name, total_students, price} = dance;
    return (
        <div className="card w-80 mb-10 glass">
            <figure><img className='h-48' src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-xl'>Instructor: {instructor_name}</p>
                <div className='flex justify-around'>
                    <p><span className='text-bold'>Avilable seets</span>: {available_seats}</p>
                    <p><span className='text-bold'>Total students</span>: {total_students}</p>
                </div>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleSelect} className="btn btn-primary">select</button>
                </div>
            </div>
        </div>
    );
};

export default DanceCart;