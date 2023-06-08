import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, } from 'react-hook-form';
import useAuth from '../../../../hook/UseAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../socialLogin/SocialLogin';

const Register = () => {
    const { signUpUserWithEmail, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    const onsubmit = form => {
        console.log(form);
        signUpUserWithEmail(form.email, form.password)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User successfully created',
                    showConfirmButton: false,
                    timer: 1500
                  })
                updateUserProfile(form.name, form.photoURL)
                    .then(() => {
                        navigate('/')
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                reset();    
            })

            .catch(err => {

                console.log(err);
            })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onsubmit)} className="card-body">
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
                            <input type="password" placeholder="password" {...register('password', {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                            })} className="input input-bordered" />
                            {errors.password?.type === 'required' && <p>password is required.</p>}
                            {errors.password?.type === 'minLength' && <p>password is at least 6 charrecter.</p>}
                            {errors.password?.type === 'pattern' && <p>password is an spcial charrecter, password is an lowerCase, password is an UppserCase.</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="confirm password" {...register('confirm', {
                                required: true,
                                validate: value => value === watch('password') || 'The passwords do not match'
                            })} className="input input-bordered" />
                            {errors.confirm && <p>confirm password is required.</p>}
                            {errors.confirm?.type === 'validate' && <p>password is required.</p>}
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
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;