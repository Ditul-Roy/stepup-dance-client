import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-neutral-content mt-10">
            <div className='footer text-gray-200'>
                <div>
                    <img className='h-24 w-24 lg:ms-10' src="https://i.ibb.co/q7dgC9w/pngegg-8.png" alt="" />
                    <p className="font-bold text-xl text-center">
                        StepUp Dance club
                    </p>
                    <p>jamal mor Thakurgaon, Bangladesh</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="NavLink NavLink-hover">Branding</a>
                    <a className="NavLink NavLink-hover">Design</a>
                    <a className="NavLink NavLink-hover">Marketing</a>
                    <a className="NavLink NavLink-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="NavLink NavLink-hover">About us</a>
                    <a className="NavLink NavLink-hover">Contact</a>
                    <a className="NavLink NavLink-hover">Jobs</a>
                    <a className="NavLink NavLink-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="NavLink NavLink-hover">Terms of use</a>
                    <a className="NavLink NavLink-hover">Privacy policy</a>
                    <a className="NavLink NavLink-hover">Cookie policy</a>
                </div>
            </div>
            <div>
                <h3 className='text-2xl text-center'>Please contact with us</h3>
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <FaFacebook></FaFacebook>
                    <FaInstagram></FaInstagram>
                    <FaWhatsapp></FaWhatsapp>
                    <FaTwitter></FaTwitter>
                </div>
            </div>
            <p>Copyright © 2023 - All right reserved</p>
        </footer>
    );
};

export default Footer;
