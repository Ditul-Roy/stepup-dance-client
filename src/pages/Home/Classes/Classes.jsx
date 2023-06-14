import React from 'react';
import useDances from '../../../hook/useDances';
import SectionTitle from '../../Shared/sectionTitle/SectionTitle';
import DanceCart from '../DanceCart/DanceCart';

const Classes = () => {
    const [dances, refetch] = useDances();
    // console.log(dances);
    return (
        <div>
            <SectionTitle heading={'Popular classes'} subHeading={'this is our top 6 classes for your choice'}></SectionTitle>
            <div className='grid lg:grid-cols-3 g-4'>
                {
                    dances.slice(0,6).map(dance => <DanceCart key={dance._id} dance={dance} refetch={refetch}></DanceCart>)
                }
            </div>
        </div>
    );
};

export default Classes;