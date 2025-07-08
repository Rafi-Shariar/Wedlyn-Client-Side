import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingCardsContainer from "./LoadingCardsContainer";
import BiodataCard from "./BiodataCard";

const PremiumMembers = () => {

    const [loading, setLoading] = useState(true);
    const [biodatas, setBioDatas] = useState([]);

    useEffect(()=>{

        axios.get(`${import.meta.env.VITE_URL}/biodatas`)
        .then((res)=>{
            setBioDatas(res.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
        })

    },[])


  return (
    <div>
      {/* title */}
      <div className="px-4 py-12 sm:px-6 lg:px-8 text-center mx-auto">
        <h1 className="text-4xl font-bold text-white bg-primary inline-block px-6 py-3 rounded-xl shadow mb-6">
          Premium Member
        </h1>
        <p className="text-gray-400 text-xm leading-relaxed">
          Becoming a <strong>Premium Member</strong> at Wedlyn means unlocking
          exclusive features that bring you closer to finding your perfect life
          partner. Our premium service is designed to provide verified, serious,
          and active profiles who are genuinely seeking marriage. 
        </p>
      </div>

      {/* Cards Container */}
      <div>
        {
            loading? (<>
             <LoadingCardsContainer></LoadingCardsContainer>
            </>):(<>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        biodatas.map(biodata => <BiodataCard key={biodata._id} biodata={biodata}></BiodataCard>)
                    }

                </div>

            </>)
        }

      </div>
    </div>
  );
};

export default PremiumMembers;
