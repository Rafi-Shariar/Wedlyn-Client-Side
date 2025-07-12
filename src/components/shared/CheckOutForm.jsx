import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError(" ");
      //create payment intent
      const res = await axios.post(
        `${import.meta.env.VITE_URL}/create-payment-intent`,
        {
          amount: 500,
        }
      );

      console.log(res);
      

      const clientSecret = res.data.clientSecret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "Rafi Shariar",
          },
        },
      });

      if (result.error) {
        console.log("Result -> ", result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          console.log("payment successful");
        }
      }
    }


  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement className="p-4 border rounded-lg shadow-sm bg-white" />

        <button
          type="submit"
          disabled={!stripe}
          className={`mt-4 w-full px-6 py-2 rounded-lg transition font-semibold text-white ${
            stripe
              ? "bg-primary hover:bg-primary/90"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Pay 5 $
        </button>
        {error && <p className="text-red-700 text-xs mt-2 ml-4">{error}</p>}
      </form>
    </div>
  );
};

export default CheckOutForm;
