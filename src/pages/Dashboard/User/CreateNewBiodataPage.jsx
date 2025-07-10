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
const CreateNewBiodataPage = () => {
  const { userInfo } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert(`Hello, ${data.name}! Your email is ${data.email}.`);
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
            {...register("age", { required: true })}
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
            {...register("expectedPartnerAge", { required: true })}
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
            {...register("expectedPartnerHeight", { required: true })}
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
            {...register("expectedPartnerWeight", { required: true })}
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
            className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90 transition"
          >
            Submit Biodata
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewBiodataPage;
