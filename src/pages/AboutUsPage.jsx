import React from 'react';
import a1 from '../assets/aboutUs/a1.jpg';
import a2 from '../assets/aboutUs/a2.jpg';
const AboutUsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12 text-gray-700">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          At <span className="font-semibold text-secondary">Wedlyn</span>, we believe that marriage is not just about compatibility — it's about connection, understanding, and shared values. We're more than a platform — we’re a bridge to meaningful relationships.
        </p>
      </div>

      {/* Section 1: Our Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Wedlyn is dedicated to creating authentic, long-lasting connections. In a world full of dating apps and fleeting interactions, we provide a trusted space where individuals can find not just a partner — but a life companion. Our platform is curated for those who value tradition, emotional bonding, and genuine commitment.
          </p>
        </div>
        <img
          src={a1}
          alt="Happy couple"
          className="rounded-xl shadow-lg"
        />
      </section>

      {/* Section 2: Why Choose Wedlyn */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={a2}
          alt="Trusted Platform"
          className="rounded-xl shadow-lg order-2 md:order-1"
        />
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-semibold text-primary mb-2">Why Choose Wedlyn?</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>Verified biodatas to ensure authenticity</li>
            <li>Advanced filters for religious, cultural, and lifestyle preferences</li>
            <li>Premium matchmaking services for serious seekers</li>
            <li>Respectful, secure, and private communication</li>
            <li>Community-focused with support from relationship experts</li>
          </ul>
        </div>
      </section>

      {/* Section 3: Our Vision */}
      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-primary mb-4">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          We envision a world where individuals from all walks of life can find love and companionship without pressure or compromise. At Wedlyn, we nurture relationships built on trust, values, and emotional depth. Whether you're seeking love for the first time or a new beginning, we are here to walk beside you on your journey.
        </p>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <h3 className="text-xl font-semibold text-secondary mb-2">Ready to begin your journey?</h3>
        <p className="text-gray-600 mb-4">Join thousands of happy members who've found their perfect match through Wedlyn.</p>
        <a
          href="/register"
          className="inline-block bg-secondary text-white px-6 py-2 rounded-xl shadow hover:bg-accent transition"
        >
          Create Your Biodata
        </a>
      </div>
    </div>
  );
};

export default AboutUsPage;
