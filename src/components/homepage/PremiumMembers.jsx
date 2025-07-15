import axios from "axios";
import React from "react";
import LoadingCardsContainer from "./LoadingCardsContainer";
import BiodataCard from "./BiodataCard";
import { useQuery } from "@tanstack/react-query";

const PremiumMembers = () => {


    const { data: biodatas={}, isLoading} = useQuery({
      queryKey:['premium-biodatas'],
      queryFn: async ()=>{
         const res = await axios.get(`${import.meta.env.VITE_URL}/premiumbiodats`);
         return res.data;
      }
    })



  return (
    <div className="bg-gradient-to-r from-sky-700 via-primary to-green-600 px-4 pb-4 md:px-10 md:pb-10 mt-16 rounded-3xl">
      {/* title */}
      <div className="px-4 py-12 sm:px-6 lg:px-8 text-center mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">
          Premium Member
        </h1>
        <p className="text-gray-300 text-xm leading-relaxed">
          Becoming a <strong>Premium Member</strong> at Wedlyn means unlocking
          exclusive features that bring you closer to finding your perfect life
          partner. Our premium service is designed to provide verified, serious,
          and active profiles who are genuinely seeking marriage. 
        </p>
      </div>

      {/* Cards Container */}
      <div>
        {
            isLoading? (<>
             <LoadingCardsContainer></LoadingCardsContainer>
            </>):(<>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        biodatas?.map(biodata => <BiodataCard key={biodata._id} biodata={biodata}></BiodataCard>)
                    }

                </div>

            </>)
        }

      </div>
    </div>
  );
};

export default PremiumMembers;
