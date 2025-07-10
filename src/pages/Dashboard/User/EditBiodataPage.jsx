import React, { useState, useEffect, useContext } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LottiLoading from "../../../components/shared/LottiLoading";
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
import { AuthContext } from "../../../context/AuthContext";

const divisions = [
  "Dhaka",
  "Chattogram",
  "Rangpur",
  "Barisal",
  "Khulna",
  "Mymensingh",
  "Sylhet",
];

const weights = Array.from({ length: 61 }, (_, i) => 40 + i);
const heights = Array.from({ length: 21 }, (_, i) => 4.0 + i * 0.1);

const EditBiodataPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();
  const { userInfo } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);
  const profileImageUrl = useWatch({ name: "profileImage", control });

  const { data: biodata, isLoading } = useQuery({
    queryKey: ["user-biodata", userInfo?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_URL}/biodata-by-email?email=${userInfo.email}`
      );
      return res.data;
    },
    enabled: !!userInfo?.email,
  });

  useEffect(() => {
    if (biodata) {
      setShowForm(true);
      for (const [key, value] of Object.entries(biodata)) {
        setValue(key, value);
      }
    }
  }, [biodata, setValue]);

  const onSubmit = async (data) => {
    if (biodata?._id) {
      await axios.patch(
        `${import.meta.env.VITE_URL}/updatebiodata/${biodata._id}`,
        data
      );
    } else {
      await axios.post(`${import.meta.env.VITE_URL}/createbiodata`, data);
    }
    alert("Biodata saved successfully!");
  };

  if (isLoading) return <LottiLoading />;

  return (
    <div>

        
        <section className="max-w-4xl mx-auto p-6 sm:p-10 bg-white shadow-xl rounded-2xl">
      
      
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">
        {biodata ? "Edit" : "Create"} Your Biodata
      </h2>

      {!biodata && !showForm && (
        <div className="text-center">
          <button
            onClick={() => setShowForm(true)}
            className="bg-secondary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary transition"
          >
            Create Biodata
          </button>
        </div>
      )}

      {showForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
        >

             <div className="flex  flex-col col-span-2">
            <label className="font-medium mb-1">Profile Image URL</label>
            <input
              type="text"
              {...register("profileImage", { required: true })}
              className="input-style"
              placeholder="https://example.com/photo.jpg"
            />

            {profileImageUrl && (
              <img
                src={profileImageUrl}
                alt="Profile Preview"
                className="mt-2 w-24 h-24 object-cover rounded-xl border"
                onError={(e) => (e.target.style.display = "none")}
              />
            )}
          </div>
        

          <div className="flex flex-col">
            <label className="font-medium mb-1">Gender</label>
            <select
              {...register("biodataType", { required: true })}
              className="input-style p-2  border border-slate-300 max-w-[350px] rounded-lg"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

            <div className="flex flex-col">
            <label className="font-medium mb-1">
              <FaUser className="inline mr-2" />
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input-style  p-2 border border-slate-300 max-w-[350px] rounded-lg"
              placeholder="Enter full name"
            />
          </div>

         

          <div className="flex flex-col">
            <label className="font-medium mb-1">
              <FaBirthdayCake className="inline mr-2" />
              Date of Birth
            </label>
            <input
              type="date"
              {...register("dateOfBirth", { required: true })}
              className="input-style p-2 border border-slate-300 max-w-[350px] rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">
              <FaRulerVertical className="inline mr-2" />
              Height
            </label>
            <select
              {...register("height", { required: true })}
              className="input-style p-2 border border-slate-300 max-w-[350px] rounded-lg"
            >
              {heights.map((h) => (
                <option key={h} value={h}>
                  {h.toFixed(1)} ft
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">
              <FaWeight className="inline mr-2" />
              Weight
            </label>
            <select
              {...register("weight", { required: true })}
              className="input-style p-2 border border-slate-300 max-w-[350px] rounded-lg"
            >
              {weights.map((w) => (
                <option key={w} value={w}>
                  {w} kg
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Age</label>
            <input
              type="number"
              {...register("age", { required: true })}
              className="input-style p-2 border border-slate-300 max-w-[350px] rounded-lg"
              placeholder="Your age"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Occupation</label>
            <input
              type="text"
              {...register("occupation", { required: true })}
              className="input-style p-2 border border-slate-300 max-w-[350px] rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Skin Tone</label>
            <input
              type="color"
              {...register("race", { required: true })}
              className="h-10 w-10 p-1 rounded-full"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Father's Name</label>
            <input
              type="text"
              {...register("fathersName", { required: true })}
              className="input-style p-2 border border-slate-300 max-w-[350px] rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Mother's Name</label>
            <input
              type="text"
              {...register("mothersName", { required: true })}
              className="input-style p-2 border border-slate-300 max-w-[350px] rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">
              <FaMapMarkerAlt className="inline mr-2 " />
              Permanent Division
            </label>
            <select
              {...register("permanentDivision", { required: true })}
              className="input-style p-2 border border-slate-300 max-w-[350px] rounded-lg"
            >
              {divisions.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Present Division</label>
            <select
              {...register("presentDivision", { required: true })}
              className="input-style p-2 border border-slate-300 max-w-[350px] rounded-lg"
            >
              {divisions.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">
              <FaHeart className="inline mr-2" />
              Expected Partner Age
            </label>
            <input
              type="number"
              {...register("expectedPartnerAge", { required: true })}
              className="input-style p-2 border border-slate-300 max-w-[350px] rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Expected Partner Height</label>
            <select
              {...register("expectedPartnerHeight", { required: true })}
              className="input-style p-2 border border-slate-300 max-w-[350px] rounded-lg"
            >
              {heights.map((h) => (
                <option key={h} value={h}>
                  {h.toFixed(1)} ft
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Expected Partner Weight</label>
            <select
              {...register("expectedPartnerWeight", { required: true })}
              className="input-style p-2 border border-slate-300 max-w-[350px] rounded-lg"
            >
              {weights.map((w) => (
                <option key={w} value={w}>
                  {w} kg
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">
              <FaEnvelope className="inline mr-2" />
              Email
            </label>
            <input
              type="email"
              defaultValue={userInfo?.email}
              readOnly
              {...register("contactEmail", { required: true })}
              className="input-style p-2 border border-slate-300 max-w-[350px] rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">
              <FaMobileAlt className="inline mr-2" />
              Mobile Number
            </label>
            <input
              type="tel"
              {...register("mobileNumber", { required: true })}
              className="input-style p-2 border border-slate-300 max-w-[350px] rounded-lg"
              placeholder="01XXXXXXXXX"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-xl font-semibold hover:bg-primary transition-all duration-300"
            >
              Save and Publish Now
            </button>
          </div>
        </form>
      )}
    </section>

    </div>
    
  );
};

export default EditBiodataPage;
