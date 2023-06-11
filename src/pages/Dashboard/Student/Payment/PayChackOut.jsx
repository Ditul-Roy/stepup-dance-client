import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const PayChackOut = () => {

    const stripe = useStripe();
    const elements = useElements();

    const [paymentErr, setPaymentErr] = useState('');

    const handleSubmit = async ( e )=> {
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card == null){
            return;
        }
        console.log('card', card);

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('payment method error', error);
            setPaymentErr(error.message);
        }
        else{
            setPaymentErr('');
            console.log('payment method', paymentMethod);
        }

    }

    return (
        <div className='w-full border-2 boreder-gray-400 p-10'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary mt-10 ms-28' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                paymentErr && <p className='text-yellow-600'>{paymentErr}</p>
            }
        </div>
    );
};

export default PayChackOut;