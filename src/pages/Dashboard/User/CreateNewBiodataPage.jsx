import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import LottiLoading from "../../../components/shared/LottiLoading";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaBirthdayCake,
  FaRulerVertical,
  FaWeight,
  FaMobileAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
const successToast = () => toast.success('Biodata Created Successfully.');
const errorToast = () => toast.error('Error occured! Try Again.');
const CreateNewBiodataPage = () => {
  const { userInfo } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();


  const onSubmit = async (data) => {

//     let imageURL = "https://i.ibb.co/2kzFJX2/default-avatar.jpg";


//      const image = data.profileImage[0];
//     const formData = new FormData();
//     formData.append("image", image);

//     const res = await axios.post(
//       `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMBB_KEY}`,
//       formData
//     );

//    if (res.data && res.data.data && res.data.data.url) {
//       imageURL = res.data.data.url;
//     }
    

    const formattedData = {
    biodataType: data.biodataType,
    category: "regular",
    name: data.name,
    profileImage: "https://i.ibb.co/2kzFJX2/default-avatar.jpg",

    dateOfBirth: data.dateOfBirth,
    height: parseFloat(data.height),
    weight: parseInt(data.weight),
    age: parseInt(data.age),
    occupation: data.occupation,
    race: data.race,

    fathersName: data.fathersName,
    mothersName: data.mothersName,
    permanentDivision: data.permanentDivision,
    presentDivision: data.presentDivision,

    expectedPartnerAge: parseInt(data.expectedPartnerAge),
    expectedPartnerHeight: parseFloat(data.expectedPartnerHeight),
    expectedPartnerWeight: parseInt(data.expectedPartnerWeight),

    contactEmail: data.contactEmail,
    mobileNumber: data.mobileNumber,
  };

  console.log(formattedData);
  

    axios.post(`${import.meta.env.VITE_URL}/createbiodata`,formattedData)
    .then(()=>{
        successToast();
       
    })
    .catch(()=>{
        errorToast();
    })
    
  };

  if (!userInfo) return <LottiLoading />;

  return (
    <div>
      <div className="text-center mb-10 mt-6">
        <h1 className="text-4xl  font-extrabold text-primary mb-4">
          Build Your Dream Biodata 💫
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Start your journey to finding the perfect match. A well-crafted
          biodata reflects your personality, values, and dreams. Let's make it
          shine!
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl bg-white p-10 rounded-xl shadow-xl mx-auto border border-slate-200"
      >
        {/* Upload Photo */}
        <div>
          <label className="block font-semibold mb-1">Upload Photo</label>
          <input
            type="file"
            {...register("profileImage", { required: true })}
            className="border border-slate-300 p-2 rounded-lg w-full"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block font-semibold mb-1">Gender</label>
          <select
            {...register("biodataType", { required: true })}
            className="border border-slate-300 p-2 rounded-lg w-full"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Name */}
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="border border-slate-300 p-2 rounded-lg w-full"
            placeholder="Enter full name"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block font-semibold mb-1">Date of Birth</label>
          <input
            type="date"
            {...register("dateOfBirth", { required: true })}
            className="border border-slate-300 p-2 rounded-lg w-full"
          />
        </div>

        {/* Height */}
        <div>
          <label className="block font-semibold mb-1">Height (ft)</label>
          <input
            type="number"
            {...register("height", { required: true })}
            className="border border-slate-300 p-2 rounded-lg w-full"
            placeholder="Ex: 5.5"
          />
        </div>

        {/* Weight */}
        <div>
          <label className="block font-semibold mb-1">Weight (kg)</label>
          <input
            type="number"
            {...register("weight", { required: true })}
            className="border border-slate-300 p-2 rounded-lg w-full"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block font-semibold mb-1">Age</label>
          <input
            type="number"
            step="0.1"
            {...register("age", { required: true, valueAsNumber:true })}
            className="border border-slate-300 p-2 rounded-lg w-full"
          />
        </div>

        {/* Occupation */}
        <div>
          <label className="block font-semibold mb-1">Occupation</label>
          <input
            type="text"
            {...register("occupation", { required: true })}
            className="border border-slate-300 p-2 rounded-lg w-full"
          />
        </div>

        {/* Skin Tone (Color Picker) */}
        <div>
          <label className="block font-semibold mb-1">Skin Tone</label>
          <div className="rounded-xl overflow-hidden w-12 h-12 border">
            <input
              type="color"
              {...register("race", { required: true })}
              className="w-full h-full p-0 border-none cursor-pointer"
              title="Pick your skin tone"
            />
          </div>
        </div>

        {/* Father's Name */}
        <div>
          <label className="block font-semibold mb-1">Father's Name</label>
          <input
            type="text"
            {...register("fathersName", { required: true })}
            className="border border-slate-300 p-2 rounded-lg w-full"
          />
        </div>

        {/* Mother's Name */}
        <div>
          <label className="block font-semibold mb-1">Mother's Name</label>
          <input
            type="text"
            {...register("mothersName", { required: true })}
            className="border border-slate-300 p-2 rounded-lg w-full"
          />
        </div>

        {/* Permanent Division */}
        <div>
          <label className="block font-semibold mb-1">Permanent Division</label>
          <select
            {...register("permanentDivision", { required: true })}
            className="border border-slate-300 p-2 rounded-lg w-full"
          >
            <option value="">Select Division</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>

        {/* Present Division */}
        <div>
          <label className="block font-semibold mb-1">Present Division</label>
          <select
            {...register("presentDivision", { required: true })}
            className="border border-slate-300 p-2 rounded-lg w-full"
          >
            <option value="">Select Division</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>

        {/* Expected Partner Age */}
        <div>
          <label className="block font-semibold mb-1">
            Expected Partner Age
          </label>
          <input
            type="number"
            {...register("expectedPartnerAge", { required: true ,valueAsNumber:true })}
            className="border border-slate-300 p-2 rounded-lg w-full"
          />
        </div>

        {/* Expected Partner Height */}
        <div>
          <label className="block font-semibold mb-1">
            Expected Partner Height
          </label>
          <input
            type="number"
            step='0.1'
            {...register("expectedPartnerHeight", { required: true,valueAsNumber:true  })}
            className="border border-slate-300 p-2 rounded-lg w-full"
          />
        </div>

        {/* Expected Partner Weight */}
        <div>
          <label className="block font-semibold mb-1">
            Expected Partner Weight
          </label>
          <input
            type="number"
            step='0.1'
            {...register("expectedPartnerWeight", { required: true ,valueAsNumber:true })}
            className="border border-slate-300 p-2 rounded-lg w-full"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            defaultValue={userInfo?.email}
            readOnly
            {...register("contactEmail", { required: true })}
            className="border border-slate-300 p-2 rounded-lg w-full text-gray-400 bg-gray-100"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block font-semibold mb-1">Mobile Number</label>
          <input
            type="tel"
            {...register("mobileNumber", { required: true })}
            className="border border-slate-300 p-2 rounded-lg w-full"
            placeholder="01XXXXXXXXX"
          />
        </div>

        {/* Submit Button (Full width row) */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-xl  hover:bg-primary/50 transition"
          >
            Submit and Publish Biodata
          </button>
        </div>
      </form>
      <Toaster position="top-right"
        reverseOrder={false}/>
    </div>
  );
};

export default CreateNewBiodataPage;
