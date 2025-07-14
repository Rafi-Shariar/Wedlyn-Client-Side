import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { use } from "react";
import CheckOutForm from "../components/shared/CheckOutForm";
import { data, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import LottiLoading from "../components/shared/LottiLoading";
import axios from "axios";
const stripePromise = loadStripe(import.meta.env.VITE_payment_key);
import { AuthContext } from "../context/AuthContext";

const CheckoutPage = () => {


  const { id } = useParams();
  const { userInfo} = use(AuthContext);

  const { data: biodata = {}, isLoading } = useQuery({
    queryKey: ["payforbiodata"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_URL}/biodata/${id}`);
      return res.data;
    },
  });

  if(isLoading) return <LottiLoading/>

  

  
  

  return (
    <div>
        <div className="border p-6 max-w-2xl mx-auto my-10 rounded-2xl border-slate-400 flex flex-col justify-center items-center gap-6">

            <h1 className="text-lg. text-center text-lg font-medium border-b">Contact Request for biodata</h1>
            <div className="flex items-center gap-3">
                <div>
                    <img src={biodata.profileImage} alt=""  className="w-28 h-28 rounded-full border-2 border-orange-400"/>
                </div>
                <div>
                    <h1 className="text-xl font-semibold text-primary">Biodata ID: <span className="text-gray-500">{id}</span></h1>
                    <h1 className="text-2xl font-semibold text-primary">Name: <span className="text-gray-500">{biodata.name}</span></h1>
                </div>
            </div>

            <div className="border p-3 rounded-xl border-slate-400 ">
              
              <h1 className="text-lg font-semibold">Paid By: <span className="font-normal text-slate-500">{userInfo?.email}</span></h1>
            </div>

        </div>
      <div className="max-w-2xl mx-auto border p-10 bg-sky-100 border-blue-400 rounded-2xl">
        <h1 className="text-lg  mb-3 font-medium">Enter Your Card Details...</h1>
        <Elements stripe={stripePromise}>
        <CheckOutForm biodata={biodata} userInfo={userInfo}></CheckOutForm>
      </Elements>
      </div>
    </div>
  );
};

export default CheckoutPage;
