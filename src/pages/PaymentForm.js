import React from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  CardElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import axios from "axios";
import { useState } from "react";

const PaymentForm = () => {
  const stripe = useStripe();
  console.log("stripe", stripe);
  const elements = useElements();
  const stripePromise = loadStripe(
    "pk_test_51MzM68SFvAwmLw7YVxrpPwHJr3QVpyrQdn89WLkDR1oVrp3qSodrV7vQUNSBEmd17sJKMusmCic3d4d4lo1h7iIK00IKLa3Wa8"
  );

  const cardStyle = {
    style: {
      base: {
        color: "#575757",
        fontWeight: 600,
        fontFamily: "poppins, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        letterSpacing: "0px",
        ":-webkit-autofill": {
          color: "#575757",
        },
        "::placeholder": {
          color: "#9C9C9C",
          fontSize: "14px",
          letterSpacing: "0.46px",
          fontWeight: "400",
          fontFamily: "poppins, sans-serif",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  const createpaymentmethod = async (data) => {
    const toek = await stripe.createToken(elements)

     console.log("toek0", toek)

    const payment = await axios
      .post("http://localhost:8000/createpayment", {
        customer: data.data.id,
        payment_method_types: ["card"],
        amount: 5.0,
        currency: "usd",
        card: elements.getElement(CardElement),

        setup_future_usage: "off_session",
        description: "Payment for Product XYZ",
       
        metadata: { 
          product_id: "prod_NkrwO3Dzg3LYLe",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const createPayment = async () => {
    const data = await axios
      .post("http://localhost:8000/createCustomer", {
        name: "asdd",
        email: "sadsd@gmail.com",
      })
      .then((res) =>  createpaymentmethod(res));
  };

  return (
    <div className="">
      <div className="row">
        <h6>Debit/Credit Card Information</h6>

        <div className="col-lg-12 mb-3">
          <h6>Card Number</h6>

          <div className="stripecard-container">
            <div className="stripe_card_number">
              <CardNumberElement options={cardStyle} className="form-control" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h6>Expiration Date</h6>
          <div className="stripe_card_expiry">
            <CardExpiryElement options={cardStyle} className="form-control" />
          </div>
        </div>
        <div className="col-lg-6">
          <h6>CVC Code</h6>
          <div className="stripe_card_cvv">
            <CardCvcElement options={cardStyle} className="form-control" />
          </div>
        </div>
        <div className="col-lg-6"></div>
      </div>
      <hr />

      <div className="buttons">
        <button
          id="complete order"
          type="button"
          className="btn btn-light"
          onClick={(e) => {
            createPayment();
          }}
        >
          Complete Order
        </button>
      </div>
      {/* <Loader loader={loader} /> */}
    </div>
  );
};

export default PaymentForm;
