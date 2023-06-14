import React from 'react';
import SectionTitle from '../../Shared/sectionTitle/SectionTitle';
import { motion } from "framer-motion"

const BannerSlider = () => {
    return (
        <div className="carousel lg:mx-40 rounded">

            <SectionTitle heading={'slider'} subHeading={'ths is'}></SectionTitle>
            <div id="slide1" className="carousel-item relative w-full lg:h-[600px] bg-black bg-opacity-40">
                <img src="https://i.ibb.co/wNkGb93/pngegg-1.png" className="w-full" />
                <motion.div className="absolute lg:left-10 top-1/4 text-white" initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    <h1 className='text-4xl uppercase text-gray-200 text-center'>hello walcome to our ekademy</h1>
                    <p>In our academi you learn to different categories of dance like hip hop dance, traditional dance, arial dance, latin iris dance etc. Our instructors servicing you carefully.</p>
                    <div className='flex justify-center'>
                        <button className='btn btn-primary my-10 mx-auto '>learn with us</button>
                    </div>
                </motion.div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 left-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full lg:h-[600px] bg-black bg-opacity-40">
                <img src="https://i.ibb.co/DM4XskH/pngegg-3.png" className="w-full" />
                <motion.div className="absolute left-10 top-1/4 text-white" initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    <h1 className='text-4xl uppercase text-gray-200 text-center'>hello walcome to our ekademy</h1>
                    <p>In our academi you learn to different categories of dance like hip hop dance, traditional dance, arial dance, latin iris dance etc. Our instructors servicing you carefully.</p>
                    <div className='flex justify-center'>
                        <button className='btn btn-primary my-10 mx-auto '>learn with us</button>
                    </div>
                </motion.div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 left-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full lg:h-[600px] bg-black bg-opacity-40">
                <img src="https://i.ibb.co/z8C5B7h/pngegg-5.png" className="w-full" />
                <motion.div className="absolute left-10 top-1/4 text-white" initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    <h1 className='text-4xl uppercase text-gray-200 text-center'>hello walcome to our ekademy</h1>
                    <p>In our academi you learn to different categories of dance like hip hop dance, traditional dance, arial dance, latin iris dance etc. Our instructors servicing you carefully.</p>
                    <div className='flex justify-center'>
                        <button className='btn btn-primary my-10 mx-auto '>learn with us</button>
                    </div>
                </motion.div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 left-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full lg:h-[600px] bg-black bg-opacity-40">
                <img src="https://i.ibb.co/mcyfJyk/pngegg-2.png" className="w-full" />
                <motion.div className="absolute left-10 top-1/4 text-white" initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    <h1 className='text-4xl uppercase text-gray-200 text-center'>hello walcome to our ekademy</h1>
                    <p>In our academi you learn to different categories of dance like hip hop dance, traditional dance, arial dance, latin iris dance etc. Our instructors servicing you carefully.</p>
                    <div className='flex justify-center'>
                        <button className='btn btn-primary my-10 mx-auto '>learn with us</button>
                    </div>
                </motion.div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 left-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default BannerSlider;