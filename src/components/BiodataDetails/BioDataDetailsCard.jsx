import React, { useState } from "react";
import { Link } from "react-router";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSkeleton from "../shared/LoadingSkeleton";
import BiodataCard from "../homepage/BiodataCard";
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { BsPersonHeart } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { isBiodataInFavourites } from "../../assets/checkAddToFavourites";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const successToast = () => toast.success("Added To Favourites");
const errorToast = () => toast.error("Error Occured! Try Again.");
const BioDataDetailsCard = ({ biodata, userInfo }) => {

  const axiosSecure = useAxiosSecure();
  const {
    biodataId,
    biodataType,
    category,
    name,
    profileImage,
    dateOfBirth,
    height,
    weight,
    age,
    occupation,
    race,
    fathersName,
    mothersName,
    permanentDivision,
    presentDivision,
    expectedPartnerAge,
    expectedPartnerHeight,
    expectedPartnerWeight,
    contactEmail,
    mobileNumber,
  } = biodata;

  const [isDisabled, setIsDisabled] = useState(
    isBiodataInFavourites(userInfo?.favourites),
    biodata
  );

  const { data: similarBiodatas = [], isLoading } = useQuery({
    queryKey: ["similar-biodatas", biodataId, biodataType],
    queryFn: async () => {
      const res = await axios.get(
        `${
          import.meta.env.VITE_URL
        }/similar-biodatas?id=${biodataId}&gender=${biodataType}`
      );

      return res.data;
    },
  });

  const {
    data,
    isLoading: CheckingLoading,
    refetch,
  } = useQuery({
    queryKey: ["checkRequst", userInfo?.email, biodata?.biodataId],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_URL}/checkcontactrequest`,
        {
          params: {
            email: userInfo?.email,
            biodataId: biodata?.biodataId,
          },
        }
      );

      return res.data;
    },
    enabled: !!userInfo?.email && !!biodata?.biodataId,
  });

  const handleAddToFavourite = () => {
    const informations = {
      userEmail: userInfo?.email,
      biodata,
    };

    axiosSecure
      .patch(`/addtofavourites`, informations)
      .then(() => {
        successToast();
        setIsDisabled(true);
      })
      .catch(() => {
        errorToast();
      });
  };

  const handleContactRequest = () => {
    refetch();
  };

  return (
    <div>
      {/* PersonalInfo */}
      <section className="flex justify-center items-center bg-white px-4 py-10">
        <div className="flex flex-col md:flex-row max-w-4xl w-full rounded-2xl shadow-2xl overflow-hidden">
          {/* Profile Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full max-h-[500px] object-cover"
            />
          </div>

          {/* Biodata Details */}
          <div className="md:w-1/2 w-full bg-gradient-to-br from-purple-100 via-purple-50 to-white p-6 flex flex-col justify-around">
            {/* Top Content */}
            <div className="space-y-3">
              <h2 className="text-4xl font-bold text-primary mb-1">{name}</h2>
              <p>
                <span className="font-semibold">Biodata ID:</span> {biodataId}
              </p>
              <p>
                <span className="font-semibold">Age:</span> {age} years
              </p>
              <p>
                <span className="font-semibold">Weight:</span> {weight} kg
              </p>
              <p>
                <span className="font-semibold">Height:</span> {height} ft
              </p>
              <p>
                <span className="font-semibold">Gender:</span> {biodataType}
              </p>
              <p>
                <span className="font-semibold">Occupation:</span> {occupation}
              </p>
              <p>
                <span className="font-semibold">Date of Birth:</span>{" "}
                {dateOfBirth}
              </p>

              {/* Skin Tone */}
              <p className="flex items-center gap-2">
                <span className="font-semibold">Skin Tone:</span>
                <span
                  className="w-5 h-5 rounded-full border border-gray-300 shadow-sm"
                  style={{ backgroundColor: race }}
                  title={race}
                ></span>
              </p>
            </div>

            {/* Button at Bottom */}
            <div className=" mt-4">
              {isDisabled ? (
                <>
                  <button className="flex items-center justify-center gap-2 w-full bg-red-300 text-white font-semibold px-4 py-2 rounded-xl shadow-md">
                    Already Added to Favourites
                  </button>
                </>
              ) : (
                <>
                  <button
                    className={`flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-xl shadow-md `}
                    onClick={handleAddToFavourite}
                  >
                    <FaHeartCircleCheck className="text-lg" />
                    Add to Favourite
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Address info */}
      <section data-aos="fade-left" className="max-w-3xl mx-auto mt-10 text-base font-medium text-gray-700">
        {/* Header */}
        <div className="relative mb-4">
          <div className="border-t border-gray-300 w-full absolute top-1/2 left-0" />
          <h3 className="inline-block relative z-10 bg-white px-4 text-lg font-semibold text-gray-800">
            <FaHome className="inline mr-2 mb-1" />
            Address
          </h3>
        </div>

        {/* Table Style Box */}
        <div className="border border-gray-300 rounded-md overflow-hidden shadow-sm">
          <div className="grid grid-cols-2 bg-primary text-white text-center font-semibold py-2 px-4 border-b border-gray-300">
            <p>Present Address</p>
            <p>Permanent Address</p>
          </div>
          <div className="grid grid-cols-2 text-center py-3 px-4">
            <p>{presentDivision}</p>
            <p>{permanentDivision}</p>
          </div>
        </div>
      </section>

      {/* parents info */}
      <section data-aos="fade-left" className="max-w-3xl mx-auto mt-10 text-base font-medium text-gray-700">
        {/* Header */}
        <div className="relative mb-4">
          <div className="border-t border-gray-300 w-full absolute top-1/2 left-0" />
          <h3 className="inline-block relative z-10 bg-white px-4 text-lg font-semibold text-gray-800">
            <FaUserFriends className="inline mr-2 mb-1" /> Parent's Info
          </h3>
        </div>

        {/* Table Style Box */}
        <div className="border border-gray-300 rounded-md overflow-hidden shadow-sm">
          <div className="grid grid-cols-2 bg-primary text-white text-center font-semibold py-2 px-4 border-b border-gray-300">
            <p>Father's Name</p>
            <p>Mother's Name</p>
          </div>
          <div className="grid grid-cols-2 text-center py-3 px-4">
            <p>{fathersName}</p>
            <p>{mothersName}</p>
          </div>
        </div>
      </section>

      {/* Expected Partner */}
      <section data-aos="fade-left" className="max-w-3xl mx-auto mt-10 text-base font-medium text-gray-700">
        {/* Header */}
        <div className="relative mb-4">
          <div className="border-t border-gray-300 w-full absolute top-1/2 left-0" />
          <h3 className="inline-block relative z-10 bg-white px-4 text-lg font-semibold text-gray-800">
            <BsPersonHeart className="inline mr-2 mb-1" />
            Expected Partner
          </h3>
        </div>

        {/* Table Style Box */}
        <div className="border border-gray-300 rounded-md overflow-hidden shadow-sm">
          <div className="grid grid-cols-3 bg-primary text-white text-center font-semibold py-2 px-4 border-b border-gray-300">
            <p>Age</p>
            <p>Height</p>
            <p>Weight</p>
          </div>
          <div className="grid grid-cols-3 text-center py-3 px-4">
            <p>{expectedPartnerAge} year</p>
            <p>{expectedPartnerHeight} kg</p>
            <p>{expectedPartnerWeight} feet</p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section data-aos="fade-left" className="max-w-3xl mx-auto mt-10 text-base font-medium text-gray-700">
        {/* Header */}
        <div className="relative mb-4">
          <div className="border-t border-gray-300 w-full absolute top-1/2 left-0" />
          <h3 className="inline-block relative z-10 bg-white px-4 text-lg font-semibold text-gray-800">
            <MdLocalPhone className="inline mr-2 mb-1" />
            Contact Info
          </h3>
        </div>

        <div>
          {userInfo?.category === "premium" ? (
            <>
              <div className="border border-gray-300 rounded-md overflow-hidden shadow-sm">
                <div className="grid grid-cols-2 bg-primary text-white text-center font-semibold py-2 px-4 border-b border-gray-300">
                  <p>Contact Number</p>
                  <p>Email</p>
                </div>
                <div className="grid grid-cols-2 text-center py-3 px-4">
                  <p>{mobileNumber}</p>
                  <p>{contactEmail} kg</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                {isLoading ? (
                  <p className="text-gray-500">Checking request status...</p>
                ) : data?.requested ? (
                  <p className="text-green-600 font-semibold">
                    Already Requested. Check your dashboard.
                  </p>
                ) : (
                  <Link
                    to={`/checkout/${biodata?.biodataId}`}
                    onClick={handleContactRequest}
                    className="bg-yellow-300 p-3 px-6 border rounded-3xl font-semibold hover:border-yellow-300 hover:bg-white hover:text-yellow-400"
                  >
                    Request Contact Information
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Suggestions */}
      <section className="mt-10 bg-gray-50 p-7 rounded-3xl">
        <h1 className="text-3xl font-semibold text-primary">
          Explore More Biodatas
        </h1>
        <div>
          {isLoading ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 mt-6">
                <LoadingSkeleton></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                {similarBiodatas.map((biodata) => (
                  <BiodataCard
                    key={biodata._id}
                    biodata={biodata}
                  ></BiodataCard>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default BioDataDetailsCard;
