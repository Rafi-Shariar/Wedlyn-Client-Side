import React, { use } from "react";
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { BsPersonHeart } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const successToast = () => toast.success("Request Successfull");
const errorToast = () => toast.error("Request Failed ! Try Again.");
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { AuthContext } from "../../../Context/AuthContext";
import  Lottiloading from '../../../components/shared/LottiLoading';
const MyBiodata = ({ biodata }) => {
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

  //todo : handle button to make premium

  const axiosSecure = useAxiosSecure();

  const {userInfo,loading} = use(AuthContext);


  const handleMakePrimium =()=>{

    axiosSecure.post(`/makepremium`, biodata)
    .then(()=>{
      successToast();
    })
    .catch(()=>{
      errorToast();
    })
    

  }

  if(loading) return <Lottiloading/>;


  return (
    <div>
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
          </div>
        </div>
      </section>

      {/* Address info */}
      <section className="max-w-3xl mx-auto mt-10 text-base font-medium text-gray-700">
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
      <section className="max-w-3xl mx-auto mt-10 text-base font-medium text-gray-700">
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
      <section className="max-w-3xl mx-auto mt-10 text-base font-medium text-gray-700">
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
      <section className="max-w-3xl mx-auto mt-10 text-base font-medium text-gray-700">
        {/* Header */}
        <div className="relative mb-4">
          <div className="border-t border-gray-300 w-full absolute top-1/2 left-0" />
          <h3 className="inline-block relative z-10 bg-white px-4 text-lg font-semibold text-gray-800">
            <MdLocalPhone className="inline mr-2 mb-1" />
            Contact Info
          </h3>
        </div>

        {/* Table Style Box */}
        <div className="border border-gray-300 rounded-md overflow-hidden shadow-sm">
          <div className="grid grid-cols-2 bg-primary text-white text-center font-semibold py-2 px-4 border-b border-gray-300">
            <p>Phone Number</p>
            <p>Email</p>
          </div>
          <div className="grid grid-cols-2 text-center py-3 px-4">
            <p>{mobileNumber}</p>
            <p>{contactEmail}</p>
          </div>
        </div>

        <div className="flex justify-center mt-10 mb-30">
            <button onClick={handleMakePrimium} className="p-2 px-6 border border-orange-600 rounded-2xl text-orange-600 bg-orange-300 hover:bg-orange-200">Make Biodata Primium</button>
        </div>
      </section>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default MyBiodata;
