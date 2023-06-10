import React from 'react';
import useDances from '../../../hook/useDances';
import SectionTitle from '../../Shared/sectionTitle/SectionTitle';
import DanceCart from '../../Home/DanceCart/DanceCart';

const AllClass = () => {
    const [dances] = useDances();
    // const {available_seats, instructor_name, image, name, total_students, price} = dances;
    return (
        <div>
            <SectionTitle heading='all classes' subHeading='our all classes for your choice'></SectionTitle>
            <div className='grid grid-cols-3'>
                {
                    dances.map(dance => <DanceCart key={dance._id} dance={dance}></DanceCart>)
                }
            </div>
        </div>
    );
};

export default AllClass;