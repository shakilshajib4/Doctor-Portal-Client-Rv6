import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Jvm3TIbzY9zycIHHqrpnPTHtbYVTDxt52I6r20IRhYxhKspOS2yBQjnHhoPyeI3litTbMJXcAMUlb2Zu7nzzZwl003hwyLyxj');

const Payment = () => {
    const { appointmentId } = useParams()

    const [appointment, setAppointment] = useState({})

    useEffect(() => {
        fetch(`https://nameless-hollows-88754.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));

    }, [appointmentId])


    return (
        <div>
            <h2>Please Pay For: {appointment.patientName} for  {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}</h4>

            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckOutForm
                    appointment={appointment} />
            </Elements>}

        </div>
    );
};

export default Payment;