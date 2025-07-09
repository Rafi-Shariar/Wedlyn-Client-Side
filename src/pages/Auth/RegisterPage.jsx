import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import pic from "../../assets/authImgs/Marriage-rafiki.png";
import { AuthContext } from "../../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
const successToast = () => toast.success("Login Successful");
const errorToast = () => toast.error("Error Login! Try Again.");
import axios from "axios";
const LoginPage = () => {
  const { createUser } = use(AuthContext);
  const [ profileImage, setProfileImage ] = useState('');
  const navigate = useNavigate();

  // TODO: password validation
  //USE flowbite Import and show preview image

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMBB_KEY}`,
      formData
    );
    setProfileImage(res.data.data.display_url);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    createUser(email, password)
      .then(() => {
        const newUser = {
          name,
          email,
          photourl: profileImage,
          role: "user",
          category: "regular",
        };

        axios.post(`${import.meta.env.VITE_URL}/users`, newUser)
        .then(()=>{
            successToast();
        })
        .catch(()=>{
            errorToast();
        })

        navigate( "/");
      })
      .catch(() => {
        errorToast();
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 via-green-600 to-green-800 rounded-2xl mt-10 p-3 ">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden animate-fade-in">
        {/* Left: Illustration */}
        <div className="flex  items-center justify-center md:w-1/2 bg-purple-100 p-10">
          <img
            src={pic}
            alt="Wedding Illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right: Login Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Create an Account
          </h2>
          <p className="text-gray-600 mb-6">
            Join us today! It's quick and easy.
          </p>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Photo URL */}
            <div>
              <label className="block text-gray-700">Photo URL</label>
              <input
                type="file"
                name="photoURL"
                onChange={handleImageUpload}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                required
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-2 bg-secondary hover:bg-accent text-white font-semibold rounded-lg transition-all"
            >
              Register
            </button>
          </form>

          <p className="text-sm text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default LoginPage;
