import React, { useEffect } from "react";
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
import { BACkEND_URL } from "../config/config";
import { Navigate, json, useNavigate, useParams } from "react-router-dom";

const PaymentForm = () => {
  const[name,setName] = useState("")
  const[email,setEmail]= useState("")
  const[price,setPrice]=useState();
  const [loader, setLoader] = useState(false);
  const {_id}= useParams();


  const stripe = useStripe();
  const navigate = useNavigate();

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
    const payment = await axios
      .post("http://localhost:8000/createpayment", data)
      .then((res) => console.log("straipe",res))
      .catch((err) => console.log(err));
  };


  const createPayment = async () => {
    const CardElement= elements.getElement(CardNumberElement)
    const toek = await stripe.createToken(CardElement)

    setLoader(true)
    const data = await axios
      .post("http://localhost:8000/createCustomer", {
        name: name,
        email: email,
        token: toek.token.id,
        
      })
      .then(async(res) =>  {
        const payment = await stripe.confirmCardPayment(res.data.data.client_secret,{
          payment_method:{
            card:CardElement
          }
        })
        // console.log("response", res);
        if(res.data.message == "created"){
          setLoader(false)
          window.alert("Payment Done")
          navigate('/product')
        }
        // console.log(payment);
      
      });
 
  };
   

  // const getapidata = async() => {
  //   const res = await axios.get(`${BACkEND_URL}/singleproduct?id=${_id}`)
  //   console.log(res.data)
  // }


  // useEffect(()=>{
  //   getapidata();
  // })

  return (
    <div className="container-fluid stripe-payment">
      {loader ? (<div className="loading-spinner"></div>) : (
      "")}
      <div className="row">
        <h3>Debit/Credit Card Information</h3>
    
        <div className="col-lg-12 mb-3">
        
          <h6>Card Number</h6>

          <div className="stripecard-container">
            <div className="stripe_card_number">
              <CardNumberElement options={cardStyle} className="form-control stripe_card_number" />
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
        <div className="col-lg-6">
          <h6>Name On Card</h6>
          <div className="stripe_card_cvv">
           <input type="text" className="form-control" required="required" onChange={(e)=>setName(e.target.value)}/>
   
          </div>
        </div>
        <div className="col-lg-6">
          <h6>Email Id</h6>
          <div className="stripe_card_cvv">
           <input type="email" className="form-control" required="required" onChange={(e)=>setEmail(e.target.value)} />
          </div>
        </div>
        <div className="buttons">
        <button
          id="complete order"
          type="button"
          className="btn btn-primary buttons-stripe-payment "
          onClick={(e) => {
            createPayment();
          }}
        >
          Complete Order
        </button>
      </div>
      </div>
      <hr />

     
      {/* <Loader loader={loader} /> */}
    </div>
  );
};

export default PaymentForm;
