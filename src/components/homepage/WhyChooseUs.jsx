import React from "react";

import secureIMG from '../../assets/whyChooseUs/encrypted.png';
import moneyIMG from '../../assets/whyChooseUs/affordable.png';
import personalIMG from '../../assets/whyChooseUs/heart.png';
const WhyChooseUs = () => {
  return (
    <div>
      <div className="px-4 py-16 sm:px-6 lg:px-8 text-center mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Why Choose Wedlyn?
        </h1>
        <p className="text-gray-600 text-base leading-relaxed mx-auto">
          Wedlyn makes finding your perfect match simple, safe, and meaningful.
          With verified profiles, affordable services, and real success stories,
          we’re here to help you start your forever with confidence.
        </p>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-6 max-w-4xl mx-auto">

        <div className="flex flex-col justify-center items-center border p-6 rounded-lg border-purple-300 shadow-lg">
            <img src={secureIMG} alt="" className="w-14"/>
            <h1 className="text-lg font-semibold">Trusted & Secure Platform</h1>
            <p className="text-xs text-gray-500">Every profile is verified and protected</p>
        </div>

        <div className="flex flex-col justify-center items-center border p-6 rounded-lg border-purple-300 shadow-lg">
            <img src={moneyIMG} alt="" className="w-14"/>
            <h1 className="text-lg font-semibold">Affordable & Transparent</h1>
            <p className="text-xs text-gray-500">No hidden costs for lifetime</p>
        </div>

        <div className="flex flex-col justify-center items-center border p-6 rounded-lg border-purple-300 shadow-lg">
            <img src={personalIMG} alt="" className="w-14"/>
            <h1 className="text-lg font-semibold">ersonalized Matchmaking</h1>
            <p className="text-xs text-gray-500">Save favorites, track requests</p>
        </div>


      </section>


    </div>
  );
};

export default WhyChooseUs;
