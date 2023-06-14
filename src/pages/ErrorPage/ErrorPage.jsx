import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <img src='https://i.ibb.co/c6K26tY/pngegg-30.png' alt="" />
            <div>
                <Link to='/'><button className='btn btn-primary'>back to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;