import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from './PaymentForm';


const stripePromise = loadStripe("pk_test_51MzM68SFvAwmLw7YVxrpPwHJr3QVpyrQdn89WLkDR1oVrp3qSodrV7vQUNSBEmd17sJKMusmCic3d4d4lo1h7iIK00IKLa3Wa8");
const Payment = () => {
  return (
    <div>

      <Elements stripe={stripePromise}>
      <PaymentForm />
      </Elements>  
    </div>
  )
}

export default Payment
