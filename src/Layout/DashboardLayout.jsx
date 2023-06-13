import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaBookmark, FaWallet, FaUserAlt, FaBook } from 'react-icons/fa';
import useAdmin from '../hook/useAdmin';
import useInstructor from '../hook/useInstructor';
import useStudent from '../hook/useStudent';

const DashboardLayout = () => {
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();
    const [isStudent] = useStudent();
    console.log(isAdmin);
    console.log(isInstructor);
    console.log(isStudent);
    return (
        <div className='pt-10'>
            <div className=" drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-40 h-full bg-base-200 text-base-content">
                        {isAdmin?.admin === true && <><li><NavLink to='/dashboard/manageUser'><FaBookmark></FaBookmark> Manage User</NavLink></li>
                            <li><NavLink to='/dashboard/manageClass'><FaBook></FaBook> Manage class</NavLink></li>
                        </>}

                        {
                            isInstructor?.instructor === true && <>
                                <li><NavLink to='/dashboard/addClass'><FaBook></FaBook> add class</NavLink></li>
                                <li><NavLink to='/dashboard/myClass'><FaBook></FaBook> my class</NavLink></li>
                            </>
                        }
                        {isStudent?.student === true &&  <>
                                <li><NavLink to='/dashboard/myClass'><FaHome></FaHome> My class</NavLink></li>
                                <li><NavLink to='/dashboard/enrolled'><FaBookmark></FaBookmark> My enrolled class</NavLink></li>
                                <li><NavLink to='/dashboard/pay'><FaWallet></FaWallet> My Payment</NavLink></li>
                            </>
                        }
                        <div className='divider'></div>
                        <li><NavLink to='/'><FaHome></FaHome> home</NavLink></li>
                        <li><NavLink to='/allClasses'><FaBook></FaBook> classes</NavLink></li>
                        <li><NavLink to='/profile'><FaUserAlt></FaUserAlt> profile</NavLink></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;