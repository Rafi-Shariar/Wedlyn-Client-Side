import React from 'react';
import { useQuery } from '@tanstack/react-query';

import LottiLoading from '../../../components/shared/LottiLoading';
import toast, { Toaster } from 'react-hot-toast';
const successToast = () => toast.success('Biodata Updated to Premium');
const errorToast = () => toast.error('Error occured! Try Again.');
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MakePremiumPage = () => {

  const axiosSecure = useAxiosSecure();
  const {
    data: premiumRequests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['premium-requests'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/premium-requests`);
      return res.data;
    },
  });

  //todo : add confirmation modal

  const handleMakePremium = async (biodataId) => {

    await axiosSecure.put(`/makepremium/${biodataId}`)
    .then(()=>{
        successToast();
        refetch();
    })
    .catch(()=>{
        errorToast();
    })
    
 
};

  if (isLoading) return <LottiLoading />;

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8">
      <h2 className="text-2xl font-bold text-primary mb-6">Biodata Premium Approval Requests</h2>

      {premiumRequests.length === 0 ? (
        <p className="text-center text-gray-500">No premium requests at the moment.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Biodata ID</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {premiumRequests.map((req) => (
                <tr key={req.biodataId} className="border-t hover:bg-gray-50 transition">
                  <td className="py-3 px-4">{req.name}</td>
                  <td className="py-3 px-4">{req.contactEmail}</td>
                  <td className="py-3 px-4">{req.biodataId}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleMakePremium(req.biodataId)}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                    >
                      Make Premium
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

       <Toaster position="top-right"
        reverseOrder={false}/>
    </div>
  );
};

export default MakePremiumPage;
