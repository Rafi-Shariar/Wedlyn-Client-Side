import React from "react";
import bannerIMG from "../../assets/bannerIMG.jpg"; // Use a meaningful romantic or cultural image
import { FaArrowRightLong } from "react-icons/fa6";
import BlurText from "../ui/BlurText";
import ShinyText from "../ui/ShinyText";
const Banner = () => {
 
  return (
    <section className="relative bg-gradient-to-br from-primary/20 via-primary/70 to-primary/20 rounded-3xl overflow-hidden max-w-7xl mx-auto mt-6 shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[600px] px-6 lg:px-12 py-16 gap-10">
        {/* Text Content */}
        <div className="space-y-4 sm:space-y-5 lg:space-y-6">
          {/* Badge */}
          <span className="inline-block bg-primary text-white font-semibold text-xs px-4 py-1.5 rounded-full tracking-widest uppercase shadow-md">
            Trusted by Thousands
          </span>

          {/* Headings */}
          <div className="space-y-1 sm:space-y-1.5">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 leading-tight">
              Find Your
            </h1>
            <BlurText
              text="Perfect Match"
              delay={450}
              animateBy="words"
              direction="top"
              className="text-3xl sm:text-5xl font-bold text-primary leading-tight"
            />
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 leading-tight">
              with Confidence & Love
            </h1>
          </div>

          {/* Paragraph */}
          <p className="text-white/90 text-base sm:text-lg max-w-md leading-relaxed">
            Discover genuine profiles with verified biodatas. Your journey to a
            lifelong partner starts here.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="/register"
              className="bg-secondary text-accent hover:bg-accent hover:text-primary font-semibold py-3 px-6 rounded-xl shadow transition-all duration-300 max-w-[180px] flex items-center justify-center gap-2"
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
{
  /* <BlurText
      text="Perfect Match"
      delay={150}
      animateBy="words"
      direction="top"
      onAnimationComplete={handleAnimationComplete}
      className="text-primary"
    /> */
}
