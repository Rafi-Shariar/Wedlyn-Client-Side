import React from "react";
import bannerIMG from "../../assets/bannerIMG.jpg"; // Use a meaningful romantic or cultural image
import { FaArrowRightLong } from "react-icons/fa6";
const Banner = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/20 via-primary/70 to-primary/20 rounded-3xl overflow-hidden max-w-7xl mx-auto mt-6 shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[600px] px-6 lg:px-12 py-16 gap-10">
        {/* Text Content */}
        <div className="space-y-6">
          <span className="inline-block bg-primary text-white font-semibold text-xs px-3 py-1 rounded-full tracking-wider uppercase shadow">
            Trusted by Thousands
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Find Your
            <span className="text-purple-900"> Perfect Match</span>
            <br />
            with Confidence & Love
          </h1>

          <p className="text-white text-lg max-w-md">
            Discover genuine profiles with verified biodatas. Your journey to a
            lifelong partner starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/register"
              className="bg-secondary hover:bg-accent font-semibold py-3 px-6 rounded-xl shadow hover:opacity-90 transition max-w-[160px] flex items-center gap-2"
            >
                Join Now
             <FaArrowRightLong /> 
            </a>
            
          </div>
        </div>

        {/* Banner Image */}
       <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src={bannerIMG}
          alt=""
        />
      </div>
      </div>
    </section>
  );
};

export default Banner;
