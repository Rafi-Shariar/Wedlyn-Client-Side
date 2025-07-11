import React from 'react';
import { FaCrown, FaHeart, FaPhoneAlt } from 'react-icons/fa';

const UserDashboardHome = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-primary">Welcome Back!</h1>

      {/* Pricing Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

        {/* Premium Member Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center border hover:shadow-xl transition">
          <div className="mb-4 flex justify-center">
            <FaCrown className="text-yellow-400 text-3xl" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Become a Premium Member</h2>
          <p className="text-lg text-primary font-semibold mb-3">$50</p>
          <p className="text-gray-600 text-sm">
            Access full platform. View and contact anyone instantly without extra steps.
          </p>
          <button className="mt-5 bg-primary text-white px-6 py-2 rounded-xl hover:bg-primary/90 transition">
            Pay Now
          </button>
        </div>

        {/* Make Your Biodata Premium */}
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center border hover:shadow-xl transition">
          <div className="mb-4 flex justify-center">
            <FaHeart className="text-pink-500 text-3xl" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Make Your Biodata Premium</h2>
          <p className="text-lg text-primary font-semibold mb-3">$10</p>
          <p className="text-gray-600 text-sm">
            Highlight your profile. Only highly interested users will get your contact details.
          </p>
          <button className="mt-5 bg-primary text-white px-6 py-2 rounded-xl hover:bg-primary/90 transition">
            Pay Now
          </button>
        </div>

        {/* Unlock Contact Info */}
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center border hover:shadow-xl transition">
          <div className="mb-4 flex justify-center">
            <FaPhoneAlt className="text-green-500 text-3xl" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Unlock Contact Details</h2>
          <p className="text-lg text-primary font-semibold mb-3">$5</p>
          <p className="text-gray-600 text-sm">
            View someone’s contact info without being a premium member.
          </p>
          <button className="mt-5 bg-primary text-white px-6 py-2 rounded-xl hover:bg-primary/90 transition">
            Pay Now
          </button>
        </div>
      </div>

      {/* Success Journey Section */}
      <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-10 shadow-md mb-30">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Your Journey to a Beautiful Marriage
        </h2>

        <div className="space-y-10 relative border-l-4 border-primary pl-6">

          {/* Step 1 */}
          <div className="relative">
            <div className="absolute -left-[28px] top-1 w-5 h-5 bg-primary rounded-full border-2 border-white"></div>
            <h3 className="text-lg font-semibold text-primary">Step 1: Create Your Story</h3>
            <p className="text-gray-600">
              Build a detailed biodata that reflects who you truly are.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="absolute -left-[28px] top-1 w-5 h-5 bg-primary rounded-full border-2 border-white"></div>
            <h3 className="text-lg font-semibold text-primary">Step 2: Discover Matches</h3>
            <p className="text-gray-600">
              Explore profiles curated to align with your preferences and values.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="absolute -left-[28px] top-1 w-5 h-5 bg-primary rounded-full border-2 border-white"></div>
            <h3 className="text-lg font-semibold text-primary">Step 3: Start Meaningful Conversations</h3>
            <p className="text-gray-600">
              Break the ice and connect with potential partners who genuinely care.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <div className="absolute -left-[28px] top-1 w-5 h-5 bg-primary rounded-full border-2 border-white"></div>
            <h3 className="text-lg font-semibold text-primary">Step 4: Family Introductions</h3>
            <p className="text-gray-600">
              Involve your loved ones and take a step closer to commitment.
            </p>
          </div>

          {/* Final Step */}
          <div className="relative">
            <div className="absolute -left-[28px] top-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-ping"></div>
            <h3 className="text-lg font-semibold text-green-600">Final Step: Begin Forever 💍</h3>
            <p className="text-gray-700">
              Celebrate love, trust, and togetherness. Your forever starts here!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardHome;
