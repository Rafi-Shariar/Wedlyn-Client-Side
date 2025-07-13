import React, { use } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LottiLoading from "../../../components/shared/LottiLoading";
import { CheckCircle } from 'lucide-react';import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import toast, { Toaster } from 'react-hot-toast';
const successToast = () => toast.success('Approved Successfully');
const errorToast = () => toast.error('Error occured! Try Again Later');


const ApproveContactRequestPage = () => {

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allContactRequests"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_URL}/allcontactrequests`
      );
      return res.data;
    },
  });

  const handleApprove = (id) =>{
    
    axios.patch(`${import.meta.env.VITE_URL}/approvecontact/${id}`)
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
      <h2 className="text-2xl font-bold mb-4 text-primary">Approve Contact Requests</h2>
      <Table>
        <TableHead className="text-base">
          <TableRow>
            <TableHeadCell>Requested By</TableHeadCell>
            <TableHeadCell>Biodata ID</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Approve Requeste</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {data.length > 0 ? (
            data.map((info) => (
              <TableRow
                key={info._id}
                className="bg-slate-200 text-base"
              >
                <TableCell className="whitespace-nowrap font-medium text-gray-900">
                  {info.requestedBy}
                </TableCell>
                <TableCell><p className="text-gray-800">{info.requestedContactID}</p></TableCell>
                <TableCell>
                   <p className="text-black">{info.requestedContactName}</p>
                </TableCell>
               
                <TableCell>
                  <button
                    className="text-green-500 hover:text--700 transition"
                    onClick={() => handleApprove(info._id)}
                  >
                    <CheckCircle size={18} className="inline mr-1"/>Approve
                  </button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4 text-gray-500">
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

export default ApproveContactRequestPage;
