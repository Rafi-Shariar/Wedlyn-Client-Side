import React, { use, useState } from "react";
import axios from "axios";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import {AuthContext} from "../../../context/AuthContext";

const GotMarriedPage = () => {
  const { userInfo } = use(AuthContext);

  const [formData, setFormData] = useState({
    femaleID: "",
    maleID: "",
    userImage: "",
    marriageDate: "",
    reviewStar: 0,
    userName: userInfo?.name || "",
    successStory: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (value) => {
    setFormData((prev) => ({ ...prev, reviewStar: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");


    try {
      await axios.post(`${import.meta.env.VITE_URL}/successstories`, formData);
      setMessage("✅ Success story submitted! ❤️");


      setFormData({
        femaleID: "",
        maleID: "",
        userImage: "",
        marriageDate: "",
        reviewStar: 0,
        userName: userInfo?.name || "",
        successStory: "",
      });
    } catch (error) {
      console.error("Error submitting success story:", error);
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-2">
          Share Your Success Story 💍
        </h1>
        <p className="text-gray-600">
          Let others know how you found your life partner on our platform.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-2xl shadow-lg"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Bride Biodata ID
            </label>
            <input
              type="number"
              name="femaleID"
              value={formData.femaleID}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Groom Biodata ID
            </label>
            <input
              type="number"
              name="maleID"
              value={formData.maleID}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Couple Image URL
          </label>
          <input
            type="url"
            name="userImage"
            value={formData.userImage}
            onChange={handleChange}
            placeholder="https://...."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {formData.userImage && (
            <img
              src={formData.userImage}
              alt="Preview"
              className="w-32 h-32 rounded-full object-cover mt-3 border mx-auto"
            />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Marriage Date
          </label>
          <input
            type="date"
            name="marriageDate"
            value={formData.marriageDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Your Story
          </label>
          <textarea
            name="successStory"
            value={formData.successStory}
            onChange={handleChange}
            rows="5"
            placeholder="Tell us how you met, your journey, and how it all came together."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            How would you rate your experience?
          </label>
          <Rating
            emptySymbol={<FaRegStar className="text-yellow-400 text-2xl" />}
            fullSymbol={<FaStar className="text-yellow-500 text-2xl" />}
            initialRating={formData.reviewStar}
            onChange={handleRatingChange}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-primary/90 transition"
        >
          {isSubmitting ? "Submitting..." : "Submit Story"}
        </button>

        {message && (
          <p
            className={`text-center font-medium mt-4 ${
              message.includes("Success") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default GotMarriedPage;
