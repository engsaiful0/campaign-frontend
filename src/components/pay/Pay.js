import React, { useState, useEffect } from "react";
import "./pay.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import CheckoutForm from "../checkoutForm/CheckForm";

const stripePromise = loadStripe(
  "pk_test_51MbNS4ILopdGmFwFLDzP1BHxSdlTprQ0TSiptxKriONX8sjKmd7EWWbgBmid43v2Pg2Q2WH6A9M9QL9XZ5BleDso00gmxszlWp"
);
const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/donation/create-payment-intent/${id}`
        );

        setClientSecret(res.data.clientSecret);
        // console.log(res.data.clientSecret);
        console.log(res.data);
      } catch (err) {
        console.log("error", err);
      }
    };
    makeRequest();
  }, []);
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div className="pay">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
