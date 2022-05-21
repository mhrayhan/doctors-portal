import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L20DuLNqypBycpH8bdaizk6CACw0nOLAb42UnaSXZvEDhZYsgeJDkD1kx051xr90hFZPxovIfMbPA91RpdLxBKW00SxlYYK4v');

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));
  if (isLoading) {
    return <p>Loading.........</p>
  }

  return (
    <div>
      <div className='bg-base-200 px-36 py-4 mt-4'>
        <div className='mb-8'>
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <p className="text-success">Hello, <span className='capitalize'>{appointment.patientName}</span></p>
              <h2 class="card-title">Please Pay for: {appointment.treatment}</h2>
              <p>We will see you on <span className='text-red-400'>{appointment.date}</span> at {appointment.slot}</p>
              <p>Please Pay: ${appointment.price}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Payment;