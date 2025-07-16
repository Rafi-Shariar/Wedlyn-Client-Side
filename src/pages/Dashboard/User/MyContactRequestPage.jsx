import React, { use } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LottiLoading from "../../../components/shared/LottiLoading";
import { Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import toast, { Toaster } from 'react-hot-toast';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const successToast = () => toast.success('Contact Request Deleted Successfully');
const errorToast = () => toast.error('Error occured! Try Again Later');
const MyContactRequestPage = () => {
  const { userInfo } = use(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["myContactRequets", userInfo?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/contactrequests?email=${userInfo?.email}`
      );
      return res.data;
    },
    enabled: !!userInfo?.email,
  });

  const handleDelete = (id) =>{
    
    axiosSecure.delete(`/deletecontactrequest/${id}`)
    .then(()=>{
        successToast();
        refetch();
    })
    .catch(()=>{
        errorToast();
    })

  }

  if (isLoading) return <LottiLoading />;
  return (
    <div>
      {/* table */}
      <div className="overflow-x-auto max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Contact Requests</h2>
      <div className="">
        {
          userInfo?.category === "premium" ? (<>
           <p className="text-center py-6 text-green-400 font-semibold">You Are Now A Premium User, You Can Directly Access Contact Informations without Any Request.</p>
          </>) : (<></>)
        }
      </div>
      <Table className="bg-white">
  <TableHead className="text-base bg-slate-100">
    <TableRow>
      <TableHeadCell className="text-white">Name</TableHeadCell>
      <TableHeadCell className="text-white">Biodata ID</TableHeadCell>
      <TableHeadCell className="text-white">Status</TableHeadCell>
      <TableHeadCell className="text-white">Mobile No</TableHeadCell>
      <TableHeadCell className="text-white">Email</TableHeadCell>
      <TableHeadCell>
        <span className="sr-only">Delete</span>
      </TableHeadCell>
    </TableRow>
  </TableHead>

  <TableBody className="divide-y divide-slate-200">
    {data.length > 0 ? (
      data.map((info) => (
        <TableRow
          key={info._id}
          className="bg-white hover:bg-slate-50 text-base"
        >
          <TableCell className="whitespace-nowrap font-medium text-gray-900">
            {info.requestedContactName}
          </TableCell>
          <TableCell>
            <p className="text-gray-800">{info.requestedContactID}</p>
          </TableCell>
          <TableCell>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                info.status === "Approved"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {info.status}
            </span>
          </TableCell>
          <TableCell>
            <p className="text-black">
              {info.status === "Approved" ? info.mobile : "---"}
            </p>
          </TableCell>
          <TableCell>
            <p className="text-black">
              {info.status === "Approved" ? info.email : "---"}
            </p>
          </TableCell>
          <TableCell>
            <button
              className="text-red-500 hover:text-red-700 transition"
              onClick={() => handleDelete(info._id)}
            >
              <Trash2 size={18} />
            </button>
          </TableCell>
        </TableRow>
      ))
    ) : (
      <TableRow>
        <TableCell colSpan={6} className="text-center py-4 text-gray-500 bg-white">
          No contact requests found.
        </TableCell>
      </TableRow>
    )}
  </TableBody>
</Table>

    </div>

     <Toaster position="top-right"
  reverseOrder={false}/>
    </div>
  );
};

export default MyContactRequestPage;
