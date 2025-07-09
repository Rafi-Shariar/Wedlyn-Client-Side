import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const BiodataCard = ({ biodata }) => {
  const {
    biodataId,
    biodataType,
    profileImage,
    permanentDivision,
    age,
    occupation,
    category,
  } = biodata;

  const isPremium = category?.toLowerCase() === "premium";

  return (
    <div className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 group">
      {/* Premium Ribbon */}
      {isPremium && (
        <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 z-10 shadow-sm border border-yellow-300">
          <FaStar className="text-yellow-500" />
          Premium
        </div>
      )}

      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="Profile"
            className="h-52 w-40 object-cover rounded-xl border-2 border-secondary shadow"
          />
        </div>

        {/* Text Info */}
        <div className="text-gray-700 space-y-2">
          <h2 className="text-xl font-semibold text-primary">
            Biodata ID: <span className="text-gray-800">{biodataId}</span>
          </h2>
          <p>
            <span className="font-medium">Type:</span> {biodataType}
          </p>
          <p>
            <span className="font-medium">Division:</span> {permanentDivision}
          </p>
          <p>
            <span className="font-medium">Age:</span> {age} years
          </p>
          <p>
            <span className="font-medium">Occupation:</span> {occupation}
          </p>
        </div>
      </div>

      {/* View Profile Button */}
      <div className="px-5 pb-5">
        <Link to={`/biodatadetails/${biodataId}`}>
          <button className="w-full bg-secondary hover:bg-accent text-white font-semibold py-2 rounded-xl transition-all duration-200">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BiodataCard;
