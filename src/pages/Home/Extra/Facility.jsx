import React from 'react';
import { motion } from "framer-motion"
import SectionTitle from '../../Shared/sectionTitle/SectionTitle';

const Facility = () => {
    // TODO: the section not finished
    return (
        <div className=" my-10 text-center">
            <SectionTitle heading={'Our facility'} subHeading={'we are servide fantastic service'}></SectionTitle>
            <div className="grid lg:grid-cols-2">
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}><img src="https://i.ibb.co/mcyfJyk/pngegg-2.png" className="max-w-sm rounded-lg shadow-2xl" /></motion.div>
                <div className='border-2'>
                    <h1 className="text-5xl font-bold text-shadow-2xl">Your best choice</h1>
                    <p className='divider'></p>
                    <motion.div className='lg:h-60 lg:w-40 lg:my-10 lg:flex lg:ms-6' animate={{ x: [0, 100, 0] }}>
                        <img className='rounded-lg shadow-2xl' src="https://i.ibb.co/prKLCqr/pngegg-24.png" alt="" />
                        <img className='rounded-lg shadow-2xl' src="https://i.ibb.co/9rZH9N2/pngegg-27.png" alt="" />
                        <img className='rounded-lg shadow-2xl' src="https://i.ibb.co/wYW207F/pngegg-14.png" alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Facility;