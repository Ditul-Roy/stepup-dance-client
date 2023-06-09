import React from 'react';
import useInstructors from '../../../hook/useInstructors';
import SectionTitle from '../../Shared/sectionTitle/SectionTitle';
import InstructorCart from '../InstructorCart/InstructorCart';

const AllInstructors = () => {
    const [instructors] = useInstructors();

    return (
        <div>
            <SectionTitle heading='Our all instructors' subHeading='there are our all instructors, who are take your classes'></SectionTitle>
            <div className='grid grid-cols-2 gap-4'>
                {
                    instructors.map(instructor => <InstructorCart key={instructor._id} instructor={instructor}></InstructorCart>)
                }
            </div>
        </div>
    );
};

export default AllInstructors;