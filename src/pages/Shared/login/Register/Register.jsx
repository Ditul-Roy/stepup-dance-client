import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onsubmit = form => {
        console.log(form);
      }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form  onSubmit={handleSubmit(onsubmit)} className="card-body">
                        <h1 className='text-3xl text-bold'>Please Register!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" {...register('name', { required: true })} className="input input-bordered" />
                            {errors.name && <p>name is required.</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register('email', { required: true })} className="input input-bordered" />
                            {errors.email && <p>email is required.</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register('password', { required: true })} className="input input-bordered" />
                            {errors.password && <p>password is required.</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="confirm password" {...register('confirm', { required: true })} className="input input-bordered" />
                            {errors.confirm && <p>confirm password is required.</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="photoURL" {...register('photoURL', { required: true })} className="input input-bordered" />
                            {errors.photoURL && <p>photoURL is required.</p>}
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="register now" />
                        </div>
                    </form>
                    <p>Already have an acoount ! please <Link className='underline' to='/login'>login</Link></p>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;