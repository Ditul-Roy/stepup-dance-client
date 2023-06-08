import React from 'react';
import SectionTitle from '../../Shared/sectionTitle/SectionTitle';

const BannerSlider = () => {
    return (
        <div className="carousel w-full">


            {/* TODO: some banner slider work do not finished.  */}

            <SectionTitle heading={'slider'} subHeading={'ths is'}></SectionTitle>
            <div id="slide1" className="carousel-item relative w-full lg:h-[600px] bg-black bg-opacity-40">
                <img src="https://i.ibb.co/wNkGb93/pngegg-1.png" className="w-full" />
                <div className="absolute left-10 top-1/4 text-white">
                    <h1 className='text-4xl uppercase text-gray-200 text-center'>hello walcome to our ekademy</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem numquam quidem eum nam, minus necessitatibus! Incidunt eligendi nemo iusto tempore. Mollitia ipsum asperiores vel vero doloribus ipsam saepe tenetur provident?</p>
                    <div className='flex justify-center'>
                        <button className='btn btn-primary my-10 mx-auto '>get started with us</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-1/2 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full lg:h-[600px]">
                <img src="https://i.ibb.co/DM4XskH/pngegg-3.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full lg:h-[600px]">
                <img src="https://i.ibb.co/z8C5B7h/pngegg-5.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full lg:h-[600px] ">
                <img src="https://i.ibb.co/mcyfJyk/pngegg-2.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default BannerSlider;