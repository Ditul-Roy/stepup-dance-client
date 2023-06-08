import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../../../hook/UseAuth';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const {loggerUserWithGoogle} = useAuth();

    const handleSignInWithGoogle = () =>{
        loggerUserWithGoogle()
        .then(res =>{
            const loggedUser = res.user;
            console.log(loggedUser);
            Swal.fire(
                'Good job!',
                'User logged successfully',
                'success'
              )
              form.reset();
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