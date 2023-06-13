import React from 'react';
import BannerSlider from '../BannerSlider/BannerSlider';
import Classes from '../Classes/Classes';
import Instructors from '../Instructors/Instructors';
import Facility from '../Extra/Facility';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <Facility></Facility>
            <Classes></Classes>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;