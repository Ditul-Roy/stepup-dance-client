import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../../hook/UseAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../socialLogin/SocialLogin';

const Login = () => {
    const {signInUserWithEmail} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleUserLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUserWithEmail(email, password)
        .then(res =>{
            const loggedUser = res.user;
            console.log(loggedUser);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'User successfully login',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from)
              form.reset();
        })
        .catch(err => { 
            console.log(err);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleUserLogin} className="card-body">
                        <h1 className='text-3xl text-bold'>Please login!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="login now" />
                        </div>
                    </form>
                    <p>new to ! please <NavLink className='underline' to='/register'>register</NavLink></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;