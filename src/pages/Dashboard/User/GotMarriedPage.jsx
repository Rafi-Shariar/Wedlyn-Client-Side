import React, { useState } from "react";
import axios from "axios";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";

const GotMarriedPage = () => {
  const [formData, setFormData] = useState({
    selfBiodataId: "",
    partnerBiodataId: "",
    imageLink: "",
    successStory: "",
    reviewStar: 0,
  });

  //TODO: complete backend

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRatingChange = (value) => {
    setFormData((prev) => ({ ...prev, reviewStar: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    console.log(formData);
    

    try {
      await axios.post(`${import.meta.env.VITE_URL}/successstories`, formData);
      setMessage("Success story submitted! ❤️");
      setFormData({
        selfBiodataId: "",
        partnerBiodataId: "",
        imageLink: "",
        successStory: "",
        reviewStar: 0,
      });
    } catch (error) {
      console.error("Error submitting success story:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-primary mb-6 text-center">Share Your Success Story</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow-md"
      >
        <div>
          <label className="block mb-1 font-medium">Self Biodata ID</label>
          <input
            type="number"
            name="selfBiodataId"
            value={formData.selfBiodataId}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Partner Biodata ID</label>
          <input
            type="number"
            name="partnerBiodataId"
            value={formData.partnerBiodataId}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Couple Image Link</label>
          <input
            type="url"
            name="imageLink"
            value={formData.imageLink}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full border rounded-md px-3 py-2"
          />
          {formData.imageLink && (
            <img
              src={formData.imageLink}
              alt="Preview"
              className="w-32 h-32 mt-2 object-cover rounded-full"
            />
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Success Story Review</label>
          <textarea
            name="successStory"
            value={formData.successStory}
            onChange={handleChange}
            rows="5"
            placeholder="Write how you feel after finding your partner..."
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Your Rating</label>
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
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition"
        >
          {isSubmitting ? "Submitting..." : "Submit Story"}
        </button>

        {message && (
          <p className={`mt-4 font-medium ${message.includes("Success") ? "text-green-600" : "text-red-500"}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default GotMarriedPage;
