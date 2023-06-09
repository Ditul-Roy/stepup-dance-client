import React from 'react';

const InstructorCart = ({ instructor }) => {
    console.log(instructor);
    const { image, instructor_name, name_of_classes, number_of_classes, email } = instructor;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{instructor_name}</h2>
                <p>{email}</p>  
                <p><span className='text-bold text-xl'>classes</span>: {name_of_classes.map((c, index) => <p key={index}>{c}</p>)}</p>
                <p><span className='text-bold text-xl'>Total class</span>: {number_of_classes}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">see classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCart;