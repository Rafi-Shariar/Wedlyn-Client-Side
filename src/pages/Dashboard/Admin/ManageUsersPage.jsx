import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  FaUserShield,
  FaStar,
  FaUserTimes,
  FaStarHalfAlt,
} from "react-icons/fa";
import Swal from "sweetalert2";
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: true,
});
const ManageUsersPage = () => {

    const [search, setSearch] = useState("");
  const { data: users = [], refetch } = useQuery({
    queryKey: ["get-usersinfo", search],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_URL}/usersinfo?search=${search}`);
      return res.data;
    },
  });

  const handleUserCategory = (userEmail, newCategory) => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: `Updating category to ${newCategory}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Update",
        cancelButtonText: "No, cancel !",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .patch(`${import.meta.env.VITE_URL}/updateuserrole`, {
              userEmail,
              newCategory,
            })
            .then(() => {
              swalWithBootstrapButtons.fire({
                title: "Updated!",
                text: "User category has been updated",
                icon: "success",
              });

              refetch();
            })
            .catch((error) => {
              console.log(error);

              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "no changed occured",
                icon: "error",
              });
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "no changed occured",
            icon: "error",
          });
        }
      });
  };

  const handleUserRole = (userEmail, newRole) => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: `Updating role to ${newRole}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Update",
        cancelButtonText: "No, cancel !",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .patch(`${import.meta.env.VITE_URL}/updateuserrole`, {
              userEmail,
              newRole,
            })
            .then(() => {
              swalWithBootstrapButtons.fire({
                title: "Updated!",
                text: "User role has been updated",
                icon: "success",
              });

              refetch();
            })
            .catch((error) => {
              console.log(error);

              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "no changed occured",
                icon: "error",
              });
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "no changed occured",
            icon: "error",
          });
        }
      });
  };

  const handleSearchChange = e =>{
    setSearch(e.target.value);
  }

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-primary mb-1">Manage Users</h1>
        <input
          type="text"
          placeholder="Search by user name"
          value={search}
          onChange={handleSearchChange}
          className="border px-4 py-2 rounded-xl shadow-lg w-full max-w-xs mt-2"
        />
      </div>

      {/* //table */}
      <section>
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full text-sm text-left">
            {/* Header */}
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-3">User Name</th>
                <th className="px-6 py-3">User Email</th>
                <th className="px-6 py-3">Make Admin</th>
                <th className="px-6 py-3">Make Premium</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="bg-white hover:bg-primary/10 transition"
                >
                  <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{user.email}</td>
                  <td className="px-6 py-4">
                    {user.role === "admin" ? (
                      <button  onClick={() =>
                          handleUserRole(user.email, "user")
                        } className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-xl text-sm font-medium shadow hover:cursor-pointer">
                        <FaUserTimes /> Cancel Admin
                      </button>
                    ) : (
                      <button  onClick={() =>
                          handleUserRole(user.email, "admin")
                        } className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded-xl text-sm font-medium shadow hover:cursor-pointer">
                        <FaUserShield /> Make Admin
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {user.category === "premium" ? (
                      <button
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-xl text-sm font-medium shadow hover:cursor-pointer"
                        name="regular"
                        onClick={() =>
                          handleUserCategory(user.email, "regular")
                        }
                      >
                        <FaStarHalfAlt /> Cancel Premium
                      </button>
                    ) : (
                      <button
                        className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded-xl text-sm font-medium shadow hover:cursor-pointer"
                        name="primium"
                        onClick={() =>
                          handleUserCategory(user.email, "premium")
                        }
                      >
                        <FaStar /> Make Premium
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ManageUsersPage;
