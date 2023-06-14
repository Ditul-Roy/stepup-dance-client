import React from 'react';

const SectionTitle = ({heading, subHeading}) => {

    return (
        <div className='text-center w-64 my-10 mx-auto'>
            <p className='text-3xl upercase text-green-600 uppercase'>{heading}</p>
            <p className='text-xs border-2 border-x-0 border-green-400 italic'>------{subHeading}------</p>
        </div>
    );
};

export default SectionTitle;