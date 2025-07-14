import React, { use } from "react";
import { AuthContext } from "../../../context/AuthContext";
import cicleImg from "../../../assets/UserType/circle.png";
import premiumImg from "../../../assets/UserType/premium-quality.png";
import penImg from "../../../assets/User Dashboard/pen.png";
import profileImg from "../../../assets/User Dashboard/profile.png";
import coupleImg from "../../../assets/User Dashboard/couple.png";
import LoveImg from "../../../assets/User Dashboard/lover.png";
import notificationImg from "../../../assets/User Dashboard/notifications.png";
import { Link } from "react-router";
const UserDashboardHome = () => {
  const { userInfo } = use(AuthContext);
  console.log(userInfo);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Member Type */}
      <div className="mb-6">
        {userInfo?.category === "premium" ? (
          <>
            <div className="border p-6 max-w-[500px] rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-xl border-yellow-200">
              <h1 className="text-xl font-medium mb-4">
                Welcome, {userInfo?.name}
              </h1>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm opacity-90">Membership Level</p>
                  <p className="text-3xl font-bold">Premium Member</p>
                </div>

                <div>
                  <img
                    src={premiumImg}
                    alt="Membership Badge"
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-300">
                  Premium Member's can connect with anyone in one step
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="border p-6 max-w-[500px] rounded-2xl bg-gradient-to-r from-green-500 to-green-800 text-white shadow-xl border-green-400">
              <h1 className="text-xl font-medium mb-4">
                Welcome, {userInfo?.name}
              </h1>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm opacity-90">Membership Level</p>
                  <p className="text-3xl font-bold">General Member</p>
                </div>

                <div>
                  <img
                    src={cicleImg}
                    alt="Membership Badge"
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-300">
                  Upgrade to Premium Membership to access additional features.
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Action Cards */}
      <div className="my-6 border p-6 rounded-2xl border-slate-300 bg-slate-100">
        <h1 className="text-2xl font-semibold text-primary mb-4">Actions for you</h1>
        <div className="grid col-end-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Link to={"/dashboard/editbiodata"}>
            <div className="h-full flex flex-col items-center justify-center mx-auto p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-700 text-white shadow-2xl text-center space-y-4 transform transition duration-300 hover:scale-105 cursor-pointer border border-yellow-300">
              <h1 className="text-xl font-medium">
                Create or Edit Your Biodata
              </h1>

              <img src={penImg} alt="Edit Icon" className="w-16 h-16 mx-auto" />

              <p className="text-sm opacity-90">
                Craft a beautiful biodata to stand out and attract the right
                users.
              </p>
            </div>
          </Link>

          <Link to={"/dashboard/viewbiodata"}>
            <div className="h-full flex flex-col items-center justify-center mx-auto p-6 rounded-2xl bg-gradient-to-br from-sky-500 to-purple-700 text-white shadow-2xl text-center space-y-4 transform transition duration-300 hover:scale-105 cursor-pointer border border-yellow-300">
              <h1 className="text-xl font-medium">
                Check Your Biodata
              </h1>

              <img src={profileImg} alt="Edit Icon" className="w-16 h-16 mx-auto" />

              <p className="text-sm opacity-90">
                Check and update your biodata to make it more attractive
              </p>
            </div>
          </Link>


          <Link to={"/dashboard/mycontactrequest"}>
            <div className="h-full flex flex-col items-center justify-center mx-auto p-6 rounded-2xl bg-gradient-to-br from-yellow-500 to-purple-700 text-white shadow-2xl text-center space-y-4 transform transition duration-300 hover:scale-105 cursor-pointer border border-yellow-300">
              <h1 className="text-xl font-medium">
                Your Requested Contacts
              </h1>

              <img src={notificationImg} alt="Edit Icon" className="w-16 h-16 mx-auto" />

              <p className="text-sm opacity-90">
                Find Contact informations of people you want to connect.
              </p>
            </div>
          </Link>


          <Link to={"/dashboard/favouritebiodata"}>
            <div className="h-full flex flex-col items-center justify-center mx-auto p-6 rounded-2xl bg-gradient-to-br from-red-500 to-purple-700 text-white shadow-2xl text-center space-y-4 transform transition duration-300 hover:scale-105 cursor-pointer border border-yellow-300">
              <h1 className="text-xl font-medium">
                Your Favourite Biodatas
              </h1>

              <img src={LoveImg} alt="Edit Icon" className="w-16 h-16 mx-auto" />

              <p className="text-sm opacity-90">
                Find list of biodatas which you added to collection as favourites.
              </p>
            </div>
          </Link>

          <Link to={"/dashboard/gotmarried"}>
            <div className="h-full flex flex-col items-center justify-center mx-auto p-6 rounded-2xl bg-gradient-to-br from-green-500 to-purple-700 text-white shadow-2xl text-center space-y-4 transform transition duration-300 hover:scale-105 cursor-pointer border border-yellow-300">
              <h1 className="text-xl font-medium">
                Got Married ? Share Experience
              </h1>

              <img src={coupleImg} alt="Edit Icon" className="w-16 h-16 mx-auto" />

              <p className="text-sm opacity-90">
                Share your experience from conecting to getting merried.
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Success Journey Section */}
      <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-10 shadow-md mb-30">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Your Journey to a Beautiful Marriage
        </h2>

        <div className="space-y-10 relative border-l-4 border-primary pl-6">
          {/* Step 1 */}
          <div className="relative">
            <div className="absolute -left-[28px] top-1 w-5 h-5 bg-primary rounded-full border-2 border-white"></div>
            <h3 className="text-lg font-semibold text-primary">
              Step 1: Create Your Story
            </h3>
            <p className="text-gray-600">
              Build a detailed biodata that reflects who you truly are.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="absolute -left-[28px] top-1 w-5 h-5 bg-primary rounded-full border-2 border-white"></div>
            <h3 className="text-lg font-semibold text-primary">
              Step 2: Discover Matches
            </h3>
            <p className="text-gray-600">
              Explore profiles curated to align with your preferences and
              values.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="absolute -left-[28px] top-1 w-5 h-5 bg-primary rounded-full border-2 border-white"></div>
            <h3 className="text-lg font-semibold text-primary">
              Step 3: Start Meaningful Conversations
            </h3>
            <p className="text-gray-600">
              Break the ice and connect with potential partners who genuinely
              care.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <div className="absolute -left-[28px] top-1 w-5 h-5 bg-primary rounded-full border-2 border-white"></div>
            <h3 className="text-lg font-semibold text-primary">
              Step 4: Family Introductions
            </h3>
            <p className="text-gray-600">
              Involve your loved ones and take a step closer to commitment.
            </p>
          </div>

          {/* Final Step */}
          <div className="relative">
            <div className="absolute -left-[28px] top-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-ping"></div>
            <h3 className="text-lg font-semibold text-green-600">
              Final Step: Begin Forever 💍
            </h3>
            <p className="text-gray-700">
              Celebrate love, trust, and togetherness. Your forever starts here!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardHome;
