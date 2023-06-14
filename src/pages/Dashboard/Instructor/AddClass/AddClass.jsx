import React, { useState } from 'react';
import useAuth from '../../../../hook/UseAuth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddClass = () => {
    const [status, setStatus] = useState('panding');

    // price take parseFloat korte hobe



    const { user } = useAuth();
    const navigate = useNavigate();
    // console.log(user);

    const { register, reset, formState: { errors }, handleSubmit } = useForm();

    const image_hosting_key = import.meta.env.VITE_image_upload_key;

    const onSubmit = async (data) => {

        const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

        const formData = new FormData();
        formData.append('image', data.image[0])
        await fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(resData => {
                if (resData.success) {
                    const imageURL = resData.data.display_url;
                    setStatus('panding');

                    const savedClass = { name: data.name, image: imageURL, instructor_name: data.instructor_name, email: data.email, available_seats: parseInt(data.available_seats), price: parseInt(data.price), status }
                    console.log(savedClass);

                    fetch('http://localhost:5000/classes', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(savedClass)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.insertedId) {
                                reset();
                                navigate('/dashboard/instructorClasses')
                            }
                        })
                }
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
                        <input type="file" {...register('image', { required: true })} className="file-input input-bordered" />
                            {errors.photoURL && <p>photoURL is required.</p>}
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
                        <input className="btn btn-primary" type="submit" value="add class" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;