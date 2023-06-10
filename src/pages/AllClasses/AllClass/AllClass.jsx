import React from 'react';
import useDances from '../../../hook/useDances';
import SectionTitle from '../../Shared/sectionTitle/SectionTitle';
import DanceCart from '../../Home/DanceCart/DanceCart';

const AllClass = () => {
    const [dances, refetch] = useDances();
    // const {available_seats, instructor_name, image, name, total_students, price} = dances;
        // const total = cart.reduce((sum, item) => item.price + sum, 0);
        // const seats = dances.reduce((sub, dance) => dance.available_seats - sub, 0) 
    return (
        <div>
            <SectionTitle heading='all classes' subHeading='our all classes for your choice'></SectionTitle>
            <div className='grid grid-cols-3 ms-4'>
                {
                    dances.map(dance => <DanceCart key={dance._id} dance={dance} refetch={refetch}></DanceCart>)
                }
            </div>
        </div>
    );
};

export default AllClass;