import React from 'react';
import useInstructors from '../../../hook/useInstructors';
import SectionTitle from '../../Shared/sectionTitle/SectionTitle';

const Instructors = () => {
    const [instructors] = useInstructors();
    console.log(instructors);
    return (
        <div>
            <SectionTitle heading='popular instructors' subHeading='There are our instructors, they are provide our dance service'></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Instructor</th>
                                <th>Email</th>
                                <th>Number of class</th>
                                <th>Name of class</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                instructors.map((instructor, index) => <tr key={instructor._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={instructor.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                {instructor.instructor_name}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {instructor.email}
                                    </td>
                                    <td>{instructor.number_of_classes}</td>
                                    <td>{instructor.name_of_classes.map(clas => <p>{clas}</p>)}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Instructors;