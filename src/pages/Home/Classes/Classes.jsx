import React from 'react';
import useDances from '../../../hook/useDances';

const Classes = () => {
    const [dances] = useDances();
    console.log(dances);
    return (
        <div>
            
        </div>
    );
};

export default Classes;