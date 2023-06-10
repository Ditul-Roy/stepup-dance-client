import React from 'react';
import useAuth from '../../../../hook/UseAuth';

const AddClass = () => {

    const {user} = useAuth();
    console.log(user);
    // const {available_seats, instructor_name, image, name, total_students, price} = dances;
    return (
        <div className="w-full">
            <div className="shadow-2xl bg-base-100 p-10">
                <h1 className="text-5xl font-bold text-center">Add a class!</h1>
                <p className='divider my-4'></p>
                <div className="">
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text" placeholder="" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">image</span>
                            </label>
                            <input type="text" placeholder="imageURL" className="input input-bordered" />
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Instructor Email</span>
                            </label>
                            <input type="email" placeholder="" defaultValue={user?.email} className="input input-bordered" />
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available seats</span>
                            </label>
                            <input type="number" placeholder="available seat" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="price" className="input input-bordered" />
                        </div>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">add Class</button>
                </div>
            </div>
        </div>
    );
};

export default AddClass;