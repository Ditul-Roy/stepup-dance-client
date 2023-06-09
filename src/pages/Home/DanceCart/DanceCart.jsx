import React from 'react';

const DanceCart = ({ dance }) => {
    console.log(dance);
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
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default DanceCart;