import React from 'react';
import useAuth from '../../../../hook/UseAuth';
import { useForm } from 'react-hook-form';

const AddClass = () => {

    const { user } = useAuth();
    // console.log(user);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        const savedClass = {name: data.name, image: data.image, instructor_name: data.instructor_name, email: data.email, available_seats: parseInt(data.available_seats), price: parseInt(data.price) }
        console.log(data);
         fetch('http://localhost:5000/classes',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(savedClass)
         })
         .then(res => res.json())
         .then(data =>{
            console.log(data);
         })
    }
    return (
        <div className="w-full">
            <div className="shadow-2xl bg-base-100 p-10">
                <h1 className="text-5xl font-bold text-center">Add a class!</h1>
                <p className='divider my-4'></p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" placeholder="class name" {...register("name", { required: true })} className="input input-bordered" />
                        {errors.name && <p>class name is required.</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">class image</span>
                        </label>
                        <input type="text" placeholder="imageURL" {...register("image", { required: true })} className="input input-bordered" />
                        {errors.image && <p>class image is required.</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} {...register("instructor_name", { required: true })} className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Instructor Email</span>
                        </label>
                        <input type="email" placeholder="" defaultValue={user?.email} {...register("email", { required: true })} className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available seats</span>
                        </label>
                        <input type="number" placeholder="available seat" {...register("available_seats", { required: true })} className="input input-bordered" />
                        {errors.available_seats && <p>Available seat is required.</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="price" {...register("price", { required: true })} className="input input-bordered" />
                        {errors.price && <p>price is required.</p>}
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="add Class" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;