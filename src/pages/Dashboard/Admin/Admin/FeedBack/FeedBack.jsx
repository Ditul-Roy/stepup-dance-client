import React from 'react';

const FeedBack = () => {
    // TODO: feedback not finished
    return (
        <div className='flex'>
            <textarea className="textarea textarea-primary" placeholder="feedback"></textarea>
            <input className='btn btn-primary ms-4 mt-4' type="submit" value="submit" />
        </div>
    );
};

export default FeedBack;