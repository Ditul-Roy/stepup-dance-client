import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hook/UseAuth';

const PayChackOut = ({ price }) => {

    // TODO: payment gatway is not finished

    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();
    const [paymentErr, setPaymentErr] = useState('');
    // const [clientSecret, setClientSecret] = useState("");

    // useEffect(() => {
    //     fetch("http://localhost:5000/create-payment-intent", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(parseInt({ price }))
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setClientSecret(data.clientSecret)
    //         });
    // }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        console.log('card', card);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment method error', error);
            setPaymentErr(error.message);
        }
        else {
            setPaymentErr('');
            console.log('payment method', paymentMethod);
        }

        // const {paymentIntent, error:confirmErr} = await stripe.confirmCardPayment(
        //     clientSecret,
        //     {
        //         payment_method: {
        //             card: card,
        //             billing_details: {
        //                 name: user?.displayName || 'anonymus',
        //                 email: user?.email || 'unkown'
        //             },
        //         },
        //     },
        // );
        // if(confirmErr){
        //     // setPaymentErr(err)
        //     console.log(confirmErr);
        // }
        // console.log(paymentIntent);

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
                <button className='btn btn-primary mt-10 ms-28' type="submit" disabled={!stripe  }>
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