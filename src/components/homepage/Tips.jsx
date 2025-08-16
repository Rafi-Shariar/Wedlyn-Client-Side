import React from 'react';
import IMG from '../../assets/tips.jpg';

const tipsData = [
  {
    title: "Be Honest in Your Profile",
    desc: "Genuine details build trust and attract the right match.",
  },
  {
    title: "Know What You’re Looking For",
    desc: "Be clear about your values and expectations.",
  },
  {
    title: "Stay Open-Minded",
    desc: "The perfect match may come in unexpected ways.",
  },
  {
    title: "Communicate Respectfully",
    desc: "Healthy conversations create strong connections.",
  },
  {
    title: "Take Your Time",
    desc: "Patience leads to meaningful and lasting relationships.",
  },
];

const Tips = () => {
  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      {/* Title + Short Description */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Tips for Finding Your Perfect Match
        </h1>
        <p className="text-gray-600 text-base mx-auto leading-relaxed">
          Finding a life partner is a beautiful journey. Here are some simple tips to help you connect meaningfully.
        </p>
      </div>

      {/* Image + Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10">
        {/* Left Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={IMG}
            alt="Tips for finding match"
            className="rounded-xl shadow-lg w-164 md:h-164 lg:h-144 object-cover"
          />
        </div>

        {/* Right Tip Cards */}
        <div className="space-y-6">
          {tipsData.map((tip, index) => (
            <div 
              data-aos="fade-left"
              key={index}
              className="p-5 rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
