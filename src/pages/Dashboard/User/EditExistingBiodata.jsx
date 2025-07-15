import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import LottiLoading from "../../../components/shared/LottiLoading";

const successToast = () => toast.success("Biodata Updated");
const errorToast = () => toast.error("Error updating! Try Again.");
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const EditExistingBiodata = ({ biodata, setUpdated }) => {

  const axiosSecure = useAxiosSecure();

    const {
    register,
    handleSubmit,
    setValue,
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

  const [previewUrl, setPreviewUrl] = useState(biodata.profileImage);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);

    const formData = new FormData();
    formData.append("image", file);

    setUploading(true);
    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMBB_KEY}`,
        formData
      );
      const uploadedUrl = res.data.data.url;
      setValue("profileImage", uploadedUrl);
      toast.success("Image uploaded");
    } catch (err) {
      console.error("Upload failed", err);
      toast.error("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = (data) => {
    axiosSecure
      .put(`/biodata/${biodata?.biodataId}`, data)
      .then(() => {
        successToast();
        setUpdated(true);
      })
      .catch(() => {
        errorToast();
      });
  };

  if (!biodata) return <LottiLoading />;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Biodata</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Preview Image */}
        <div className="md:col-span-2 flex items-center gap-4">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-24 h-24 object-cover rounded-full border"
          />
          {uploading && <p className="text-yellow-600">Uploading...</p>}
        </div>

        {/* Upload */}
        <div>
          <label className="block font-semibold mb-1">Change Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border border-slate-300 p-2 rounded-lg w-full"
          />
        </div>

        {/* Name */}
        <div>
          <label className="font-medium mb-1 block">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="font-medium mb-1 block">Date of Birth</label>
          <input
            type="date"
            {...register("dateOfBirth", { required: true })}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Height */}
        <div>
          <label className="font-medium mb-1 block">Height (e.g. 5.5)</label>
          <input
            type="number"
            step="0.1"
            {...register("height", { required: true })}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Weight */}
        <div>
          <label className="font-medium mb-1 block">Weight (kg)</label>
          <input
            type="number"
            {...register("weight", { required: true })}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Age */}
        <div>
          <label className="font-medium mb-1 block">Age</label>
          <input
            type="number"
            {...register("age", { required: true })}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Occupation */}
        <div>
          <label className="font-medium mb-1 block">Occupation</label>
          <input
            type="text"
            {...register("occupation", { required: true })}
            className="w-full border p-2 rounded-lg"
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
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Mother's Name */}
        <div>
          <label className="font-medium mb-1 block">Mother's Name</label>
          <input
            type="text"
            {...register("mothersName", { required: true })}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Permanent Division */}
        <div>
          <label className="font-medium mb-1 block">Permanent Division</label>
          <select
            {...register("permanentDivision", { required: true })}
            className="w-full border p-2 rounded-lg"
          >
            <option value="">Select</option>
            {["Dhaka", "Chattogram", "Rangpur", "Barisal", "Khulna", "Mymensingh", "Sylhet"].map((div) => (
              <option key={div} value={div}>{div}</option>
            ))}
          </select>
        </div>

        {/* Present Division */}
        <div>
          <label className="font-medium mb-1 block">Present Division</label>
          <select
            {...register("presentDivision", { required: true })}
            className="w-full border p-2 rounded-lg"
          >
            <option value="">Select</option>
            {["Dhaka", "Chattogram", "Rangpur", "Barisal", "Khulna", "Mymensingh", "Sylhet"].map((div) => (
              <option key={div} value={div}>{div}</option>
            ))}
          </select>
        </div>

        {/* Expected Partner Age */}
        <div>
          <label className="font-medium mb-1 block">Expected Partner Age</label>
          <input
            type="number"
            {...register("expectedPartnerAge", { required: true })}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Expected Partner Height */}
        <div>
          <label className="font-medium mb-1 block">Expected Partner Height</label>
          <input
            type="number"
            step="0.1"
            {...register("expectedPartnerHeight", { required: true })}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Expected Partner Weight */}
        <div>
          <label className="font-medium mb-1 block">Expected Partner Weight</label>
          <input
            type="number"
            {...register("expectedPartnerWeight", { required: true })}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Email (read-only) */}
        <div>
          <label className="font-medium mb-1 block">Email (read-only)</label>
          <input
            type="email"
            value={biodata.contactEmail}
            readOnly
            className="w-full border p-2 rounded-lg text-slate-500 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="font-medium mb-1 block">Mobile Number</label>
          <input
            type="tel"
            {...register("mobileNumber", { required: true })}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Save Changes"}
          </button>
        </div>
      </form>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default EditExistingBiodata;
