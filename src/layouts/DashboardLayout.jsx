import React, { use, useState } from "react";
import { BsLayoutSidebar, BsX } from "react-icons/bs";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../context/AuthContext";
import LottiLoading from "../components/shared/LottiLoading";
import { FaPenAlt } from "react-icons/fa";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { CiViewList } from "react-icons/ci";
import { IoHeartCircleOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
const successToast = () => toast.success("Logout Successful");
const errorToast = () => toast.error("Error logging out! Try Again.");
const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { userInfo,logOutUser, loading } = use(AuthContext);
  const navigate = useNavigate();

    const handleLogout = () => {
    logOutUser()
      .then(() => {
        successToast();
        navigate('/');
      })
      .catch(() => {
        errorToast();
      });
  };

  if(loading) return <LottiLoading/>

  const userlinks = (
    <>
      <h1 className="text-gray-400">Menu</h1>
      <NavLink to={"/dashboard"}>
        <MdDashboard className="inline mr-2 mb-1" />
        Dashboard
      </NavLink>
      <NavLink to={"/dashboard/editbiodata"}>
        <FaPenAlt className="inline mr-2 mb-1" />
        Edit Biodata
      </NavLink>
      <NavLink to={"/dashboard/viewbiodata"}>
        <CiViewList className="inline mr-2 mb-1" />
        View Biodata
      </NavLink>
      <NavLink to={"/dashboard/mycontactrequest"}>
        <VscGitPullRequestGoToChanges className="inline mr-2 mb-1" />
        My Contact Request
      </NavLink>
      <NavLink to={"/dashboard/favouritebiodata"}>
        <IoHeartCircleOutline className="inline mr-2 mb-1" />
        Favourite Biodata
      </NavLink>

      <div className="flex flex-col gap-3 mt-20">
        <h1 className="text-gray-400">General</h1>
        <NavLink to={"/"}>
          <FaArrowLeftLong className="inline mr-2 mb-1" />
          Back to Website
        </NavLink>
        <button className="text-start hover:cursor-pointer" onClick={handleLogout}>
          <BiLogOut className="inline mr-2 mb-1" />
          Logout
        </button>
      </div>
    </>
  );

  const adminlinks = (
    <>
      <h1 className="text-gray-400">Menu</h1>
      <NavLink to={"/dashboard"}>
        <MdDashboard className="inline mr-2 mb-1" />
        Dashboard
      </NavLink>
      <NavLink to={"/dashboard/manageusers"}>
        <FaPenAlt className="inline mr-2 mb-1" />
        Manage Users
      </NavLink>
      <NavLink to={"/dashboard/approvedpremium"}>
        <CiViewList className="inline mr-2 mb-1" />
        Approved Premium
      </NavLink>
      <NavLink to={"/dashboard/approvedcontactrequest"}>
        <VscGitPullRequestGoToChanges className="inline mr-2 mb-1" />
        Approved Contact Request
      </NavLink>
       <NavLink to={"/dashboard/successstories"}>
        <VscGitPullRequestGoToChanges className="inline mr-2 mb-1" />
        Success Stories
      </NavLink>

      <div className="flex flex-col gap-3 mt-20">
        <h1 className="text-gray-400">General</h1>
        <NavLink to={"/"}>
          <FaArrowLeftLong className="inline mr-2 mb-1" />
          Back to Website
        </NavLink>
        <button className="text-start hover:cursor-pointer" onClick={handleLogout}>
          <BiLogOut className="inline mr-2 mb-1" />
          Logout
        </button>
      </div>
    </>
  );



  return (
    <div>
      {userInfo ? (
        <>
          <div className="flex min-h-screen ">
            {/* Sidebar for desktop */}
            <aside className="hidden lg:block w-64 shadow-md p-4 bg-primary/90 sticky top-0 h-screen">
              <Link to={'/'} className="flex items-center space-x-3">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
                <span className="text-white text-2xl font-semibold">
                  Wedlyn
                </span>
              </Link>
              <nav className="space-y-4 mt-10 flex flex-col text-white">
                {userInfo?.role == "admin" ? (
                  <>{adminlinks}</>
                ) : (
                  <>{userlinks}</>
                )}
              </nav>
            </aside>

            {/* Sidebar overlay for mobile/tab */}
            {sidebarOpen && (
              <div
                className="fixed bg-opacity-50 z-40 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              ></div>
            )}

            <aside
              className={`fixed z-50 top-0 left-0 h-full w-64 bg-primary shadow-md transform ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 lg:hidden`}
            >
              <div className="p-4 flex items-center justify-between border-b">
                <div className="flex items-center space-x-3">
                  <img src={logo} alt="Logo" className="h-10 w-auto" />
                  <span className="text-white text-2xl font-semibold">
                    Wedlyn
                  </span>
                </div>
                <button onClick={() => setSidebarOpen(false)}>
                  <BsX size={24} />
                </button>
              </div>
              <nav className="p-4 space-y-4 text-white flex flex-col">
                {userInfo?.role == "admin" ? (
                  <>{adminlinks}</>
                ) : (
                  <>{userlinks}</>
                )}
              </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col">
              {/* Top Navbar */}
              <header className="bg-slate-100 shadow px-4 py-3 flex items-center justify-between ">


                <div className="lg:hidden">
                  <button onClick={() => setSidebarOpen(true)}>
                    <BsLayoutSidebar size={24} />
                  </button>
                </div>



                <div className="flex items-center gap-4">
                  <img
                    src={userInfo?.photourl}
                    alt="User"
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <h1 className="text-lg font-semibold text-primary">
                      {userInfo?.name}
                    </h1>
                    <p className="text-sm text-gray-600">
                      {userInfo?.email}
                    </p>
                  </div>
                </div>
              </header>

              {/* Page content */}
              <main className="p-4">
                <Outlet />
              </main>
            </div>
          </div>
        </>
      ) : (
        <>
          <LottiLoading></LottiLoading>
        </>
      )}
    </div>
  );
};

export default DashboardLayout;
