import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';
import { FaHome, FaBookmark, FaWallet, FaUserAlt, FaBook } from 'react-icons/fa';

const DashboardLayout = () => {
    return (
        <div className='pt-10'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to='/dashboard/myClass'><FaHome></FaHome> My class</Link></li>
                        <li><Link to='/dashboard/enrolled'><FaBookmark></FaBookmark> My enrolled class</Link></li>
                        <li><Link to='/dashboard/pay'><FaWallet></FaWallet> My Payment</Link></li>
                        <div className='divider'></div>
                        <li><Link to='/'><FaHome></FaHome> home</Link></li>
                        <li><Link to='/allClasses'><FaBook></FaBook> classes</Link></li>
                        <li><Link to='/profile'><FaUserAlt></FaUserAlt> profile</Link></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;