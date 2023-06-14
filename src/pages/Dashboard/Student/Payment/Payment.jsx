import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import PayChackOut from './PayChackOut';
import useAuth from '../../../../hook/UseAuth';

const stripPromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)
const Payment = ({ pay }) => {
    const { user } = useAuth()
    console.log(pay);
    // const price = pay.price;
    // console.log(price);

    return (
        <div className='w-96'>
            <h3 className='text-3xl text-center underline my-10'>your payment hare: {user?.displayName}</h3>
            <Elements stripe={stripPromise}>
                <PayChackOut></PayChackOut>
            </Elements>
        </div>
    );
};

export default Payment;