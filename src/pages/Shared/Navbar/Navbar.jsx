import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hook/UseAuth';

const Navbar = () => {
    const {user, signOutUser} = useAuth();
    const isInstructor = false;
    const handleLogOut = () => {
        signOutUser();
    }

    const navItem = <>
        <li><NavLink to='/'>home</NavLink></li>
        <li><NavLink to='/instructors'>instractors</NavLink></li>
        <li><NavLink to='/allClasses'>classes</NavLink></li>
        {user ? <>
        <li><NavLink to={isInstructor ? "/dashboard/instructorClasses" : "/dashboard/myClass"}>dashboard</NavLink></li>
        <li><NavLink to='/profile'>profile</NavLink></li>
        <li><button onClick={handleLogOut}>logOut</button></li>
        </> :  <li><NavLink to='/login'>log in</NavLink></li>} 
    </>
    return (
        <div className="navbar bg-black bg-opacity-40 text-white uppercase">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <div className="ms-10 normal-case text-xl text-green-500 flex flex-row ">
                    <img className='h-12 w-12' src="https://i.ibb.co/q7dgC9w/pngegg-8.png" alt="" />
                    <div>
                    <p className='mb-0'>StepUp</p>
                    <span className='text-xs'>dance club</span>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-green-500 ">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;