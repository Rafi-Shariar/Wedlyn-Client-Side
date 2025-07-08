import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-3">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          We'd love to hear from you. Whether you have questions, suggestions, or feedback — your voice matters in building meaningful connections through Wedlyn.
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="space-y-6 bg-white p-8 rounded-xl shadow-md border-2 border-secondary/30">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              placeholder="Inquiry about biodata"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Your Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-secondary text-white font-semibold py-2 rounded-md hover:bg-accent transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6 text-sm bg-primary/20 p-8 rounded-xl border">
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">Customer Support</h2>
            <p className="text-gray-600">
              Have a question or need help? Our support team is available 7 days a week to assist you with account issues, profile updates, and matchmaking guidance.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700">Email:</h3>
            <p className="text-gray-600">support@wedlyn.com</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700">Phone:</h3>
            <p className="text-gray-600">+880 1617 852 079</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700">Head Office:</h3>
            <p className="text-gray-600">Gulshan 2, Dhaka, Bangladesh</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-700">Working Hours:</h3>
            <p className="text-gray-600">Sat - Thu: 10 AM – 6 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
