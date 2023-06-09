import React from 'react';
import useInstructors from '../../../hook/useInstructors';
import SectionTitle from '../../Shared/sectionTitle/SectionTitle';

const Instructors = () => {
    const [instructors] = useInstructors();
    console.log(instructors);
    return (
        <div>
            <SectionTitle heading='popular instructors' subHeading='There are our instructors, they are provide our dance service'></SectionTitle>
        </div>
    );
};

export default Instructors;