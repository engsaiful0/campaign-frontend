import React, { useState, useEffect } from "react";
import "./pay.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import AdminCheckout from "../checkoutForm/AdminCheckout";

const stripePromise = loadStripe(
  "pk_test_51MbNS4ILopdGmFwFLDzP1BHxSdlTprQ0TSiptxKriONX8sjKmd7EWWbgBmid43v2Pg2Q2WH6A9M9QL9XZ5BleDso00gmxszlWp"
);
const AdminPay = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          "/subscription/create-payment-subscription/"
        );

        setClientSecret(res.data.clientSecret);
        console.log(res.data.clientSecret);
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
          <AdminCheckout />
        </Elements>
      )}
    </div>
  );
};

export default AdminPay;
