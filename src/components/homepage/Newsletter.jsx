import React, { useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Subscribed!")
    setEmail("");
  };

  return (
    <div className="bg-primary/10 py-12 px-6 sm:px-12 lg:px-24 rounded-2xl max-w-5xl mx-auto shadow-lg border border-purple-600">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Join Our Community
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          Subscribe to <strong>Wedlyn Newsletter</strong> for regular updates, 
          dating tips, success stories, and exclusive advice to help you find your perfect match.
          Stay inspired and never miss out!
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row justify-center items-center gap-4"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full sm:w-auto flex-1 px-5 py-4 rounded-xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700 shadow-sm"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-purple-700 text-white font-semibold rounded-xl hover:bg-purple-800 transition-colors duration-300 shadow-md"
        >
          Subscribe Now
        </button>
      </form>

      {/* Extra Note */}
      <p className="text-gray-500 text-sm text-center mt-6">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default Newsletter;
