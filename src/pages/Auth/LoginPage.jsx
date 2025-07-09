import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import pic from "../../assets/authImgs/Wedding-bro.png";
import googleImg from '../../assets/authImgs/search.png';
import { AuthContext } from "../../context/AuthContext";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
const successToast = () => toast.success('Login Successful');
const errorToast = () => toast.error('Error Login! Try Again.');
const LoginPage = () => {

    const {logInUser, GoogleLogIn} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    // TODO:password validation


  const handleLogin = (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email,password)
    .then(()=>{
        successToast();
        navigate(location.state? location.state : '/');
    })
    .catch(()=>{
        errorToast();

    })
    
  };

  const handleGoogleSignIn = () => {
    GoogleLogIn()
    .then((result)=>{
        const loggedUser = result.user;

        const newUser = {
            name: loggedUser.displayName,
            email: loggedUser.email,
            photourl: loggedUser.photoURL,
            role:"user",
            category:"regular"
        }

        axios.post(`${import.meta.env.VITE_URL}/users`, newUser)
        .then(()=>{
            successToast();
            navigate(location.state? location.state : '/');
        })
        .catch(() =>{
            
        })
        navigate(location.state? location.state : '/');
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary/75 via-primary to-primary/75 rounded-2xl mt-10 p-3">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden animate-fade-in">
        {/* Left: Illustration */}
        <div className="flex items-center justify-center md:w-1/2 bg-purple-100 p-10">
          <img src={pic} alt="Wedding Illustration" className="max-w-full h-auto" />
        </div>

        {/* Right: Login Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
          <p className="text-gray-600 mb-6">Please log in to your account</p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                name="email"
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                name="password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-secondary hover:bg-accent text-white font-semibold rounded-lg transition-all"
            >
              Login
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-grow border-t border-gray-300" />
            <span className="text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full py-2 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
          >
            <img
              src={googleImg}
              alt="Google"
              className="w-5 h-5"
            />
            <span>Continue with Google</span>
          </button>

          <p className="text-sm text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary font-semibold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
      <Toaster position="top-right"
  reverseOrder={false}/>
    </div>
  );
};

export default LoginPage;
