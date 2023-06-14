import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../../../hook/UseAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { loggerUserWithGoogle } = useAuth();
    const navigatate = useNavigate();
    const [role, setRole] = useState('student')

    const handleSignInWithGoogle = () => {
        loggerUserWithGoogle()
            .then(res => {
                const loggedUser = res.user;
                setRole('student')
                // console.log(loggedUser);
                const newUser = { name: loggedUser.displayName, email: loggedUser.email, image: loggedUser.photoURL, role };
                console.log(newUser);
                fetch('https://dance-ecademy-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                });
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User successfully login',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigatate('/')

            })
            .catch(err => {

                console.log(err);
            })
    }
    return (
        <div className='py-4 '>
            <div className='divider'>OR</div>
            <div className='flex justify-center'><button onClick={handleSignInWithGoogle} className='btn btn-outline btn-circle btn-warning'><FaGoogle></FaGoogle></button></div>
        </div>
    );
};

export default SocialLogin;