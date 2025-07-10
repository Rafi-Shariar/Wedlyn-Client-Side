import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import LottiLoading from "../../../components/shared/LottiLoading";
const successToast = () => toast.success("Biodata Updated");
const errorToast = () => toast.error("Error updating! Try Again.");
const EditExistingBiodata = ({ biodata,setUpdated}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...biodata,
      height: parseFloat(biodata.height),
      weight: parseInt(biodata.weight),
      expectedPartnerHeight: parseFloat(biodata.expectedPartnerHeight),
      expectedPartnerWeight: parseInt(biodata.expectedPartnerWeight),
      expectedPartnerAge: parseInt(biodata.expectedPartnerAge),
      age: parseInt(biodata.age),
    },
  });

  const onSubmit = (data) => {

    console.log(data);
    

    axios.put(`${import.meta.env.VITE_URL}/biodata/${biodata?.biodataId}`, data)
    .then(()=>{
        successToast()
        setUpdated(true);
    })
    .catch(()=>{
        errorToast();
    })

  };

  if(!biodata) return <LottiLoading/>

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Biodata</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Name */}
        <div>
          <label className="font-medium mb-1 block">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input-style w-full border p-2 rounded-lg"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="font-medium mb-1 block">Date of Birth</label>
          <input
            type="date"
            {...register("dateOfBirth", { required: true })}
            className="input-style w-full border p-2 rounded-lg"
          />
        </div>

        {/* Height */}
        <div>
          <label className="font-medium mb-1 block">Height (e.g. 5.5)</label>
          <input
            type="number"
            step="0.1"
            {...register("height", { required: true })}
            className="input-style w-full border p-2 rounded-lg"
          />
        </div>

        {/* Weight */}
        <div>
          <label className="font-medium mb-1 block">Weight (kg)</label>
          <input
            type="number"
            {...register("weight", { required: true })}
            className="input-style w-full border p-2 rounded-lg"
          />
        </div>

        {/* Age */}
        <div>
          <label className="font-medium mb-1 block">Age</label>
          <input
            type="number"
            {...register("age", { required: true })}
            className="input-style w-full border p-2 rounded-lg"
          />
        </div>

        {/* Occupation */}
        <div>
          <label className="font-medium mb-1 block">Occupation</label>
          <input
            type="text"
            {...register("occupation", { required: true })}
            className="input-style w-full border p-2 rounded-lg"
          />
        </div>

        {/* Skin Tone */}
        <div>
          <label className="font-medium mb-1 block">Skin Tone</label>
          <input
            type="color"
            {...register("race")}
            className="h-10 w-10 border rounded-lg cursor-pointer"
          />
        </div>

        {/* Father's Name */}
        <div>
          <label className="font-medium mb-1 block">Father's Name</label>
          <input
            type="text"
            {...register("fathersName", { required: true })}
            className="input-style w-full border p-2 rounded-lg"
          />
        </div>

        {/* Mother's Name */}
        <div>
          <label className="font-medium mb-1 block">Mother's Name</label>
          <input
            type="text"
            {...register("mothersName", { required: true })}
            className="input-style w-full border p-2 rounded-lg"
          />
        </div>

        {/* Permanent Division */}
        <div>
          <label className="font-medium mb-1 block">Permanent Division</label>
          <select
            {...register("permanentDivision", { required: true })}
            className="input-style w-full border p-2 rounded-lg"
          >
            <option value="">Select</option>
            {["Dhaka", "Chattogram", "Rangpur", "Barisal", "Khulna", "Mymensingh", "Sylhet"].map((div) => (
              <option key={div} value={div}>
                {div}
              </option>
            ))}
          </select>
        </div>

        {/* Present Division */}
        <div>
          <label className="font-medium mb-1 block">Present Division</label>
          <select
            {...register("presentDivision", { required: true })}
            className="input-style w-full border p-2 rounded-lg"
          >
            <option value="">Select</option>
            {["Dhaka", "Chattogram", "Rangpur", "Barisal", "Khulna", "Mymensingh", "Sylhet"].map((div) => (
              <option key={div} value={div}>
                {div}
              </option>
            ))}
          </select>
        </div>

        {/* Expected Partner Age */}
        <div>
          <label className="font-medium mb-1 block">Expected Partner Age</label>
          <input
            type="number"
            {...register("expectedPartnerAge", { required: true })}
            className="input-style w-full border p-2 rounded-lg"
          />
        </div>

        {/* Expected Partner Height */}
        <div>
          <label className="font-medium mb-1 block">Expected Partner Height</label>
          <input
            type="number"
            step="0.1"
            {...register("expectedPartnerHeight", { required: true })}
            className="input-style w-full border p-2 rounded-lg"
          />
        </div>

        {/* Expected Partner Weight */}
        <div>
          <label className="font-medium mb-1 block">Expected Partner Weight</label>
          <input
            type="number"
            {...register("expectedPartnerWeight", { required: true })}
            className="input-style w-full border p-2 rounded-lg"
          />
        </div>

        {/* Email (read-only) */}
        <div>
          <label className="font-medium mb-1 block">Email (read-only)</label>
          <input
            type="email"
            value={biodata.contactEmail}
            readOnly
            className="input-style w-full border p-2 rounded-lg text-slate-500 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="font-medium mb-1 block">Mobile Number</label>
          <input
            type="tel"
            {...register("mobileNumber", { required: true })}
            className="input-style w-full border p-2 rounded-lg"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition"
          >
            Save Changes
          </button>
        </div>
      </form>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default EditExistingBiodata;
