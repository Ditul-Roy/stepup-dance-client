import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PayChackOut from './PayChackOut';

const stripPromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)
const Payment = ({pay}) => {
    console.log(pay);
    return (
        <div className='w-96'>
            <h3 className='text-3xl text-center underline my-10'>taka de taratari:{pay?.instructor_name}</h3>
            <Elements stripe={stripPromise}>
                <PayChackOut></PayChackOut>
            </Elements>
        </div>
    );
};

export default Payment;