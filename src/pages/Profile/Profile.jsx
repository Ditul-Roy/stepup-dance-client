import React from 'react';
import useAuth from '../../hook/UseAuth';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Profile = () => {
    const { user } = useAuth();
    return (
        <div className="card card-side bg-base-100 shadow-xl p-20">
            <figure><img className='h-80 w-80' src={user?.photoURL} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{user?.displayName}</h2>
                <p>{user?.email}</p>
                <div className="card-actions justify-end">
                    <Link to='/'><button className="btn btn-primary"><FaArrowLeft></FaArrowLeft> back to home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;