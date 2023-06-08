import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <p className='text-3xl upercase text-green-600 '>{heading}</p>
            <p className='text-xl border-2 border-x-0 border-green-400'>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;