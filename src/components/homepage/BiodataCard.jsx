import React from "react";
import { Button } from "flowbite-react";
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
    <div className=" bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-100">
      {/* Premium Badge (behind image) */}
      

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 items-center">

        <div className="flex justify-center relative">

          <img
            src={profileImage}
            alt="Profile"
            className="h-52 w-36 object-cover rounded-xl border-2 border-secondary relative z-10"
          />

          {isPremium && (
        <div className="absolute p-2 z-40 left-0 md:-top-2 md:left-34 lg:left-30 xl:left-36 bg-yellow-50 border rounded-full border-secondary">
          <div className="relative">
            <FaStar className="text-yellow-400 text-lg drop-shadow" />
          </div>
        </div>
      )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2 text-gray-700">
          <h2 className="text-lg font-semibold text-primary">
            Biodata ID: <span className="text-gray-800">{biodataId}</span>
          </h2>
          <p className="text-sm">
            <span className="font-medium">Type:</span> {biodataType}
          </p>
          <p className="text-sm">
            <span className="font-medium">Division:</span> {permanentDivision}
          </p>
          <p className="text-sm">
            <span className="font-medium">Age:</span> {age} years
          </p>
          <p className="text-sm">
            <span className="font-medium">Occupation:</span> {occupation}
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="px-4 pb-4">
        <Link to={`/biodatadetails/${biodataId}`}>
        <button
          color="none"
          className="w-full bg-secondary hover:bg-accent hover:cursor-pointer text-white font-medium py-2 rounded-xl transition-all duration-300"
        >
          View Profile
        </button>
        </Link>
      </div>
    </div>
  );
};

export default BiodataCard;
