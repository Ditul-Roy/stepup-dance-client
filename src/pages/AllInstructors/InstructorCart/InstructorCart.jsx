import React from 'react';

const InstructorCart = ({ instructor }) => {
    console.log(instructor);
    const { image, name, email} = instructor;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-60' src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">see classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCart;