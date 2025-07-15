import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';
import LottiLoading from '../../../components/shared/LottiLoading';
import toast, { Toaster } from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
const successToast = () => toast.success('Removed from favourites');
const errorToast = () => toast.error('Error occurred ! Try Again.');
const MyFavouriteBiodataPage = () => {
  const { userInfo } = React.useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  // Fetch all favourite biodatas using TanStack Query
  const { data: favourites = [], isLoading, refetch } = useQuery({
    queryKey: ['favourites', userInfo?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myfavourites/${userInfo?.email}`);
      return res.data;
    },
    enabled: !!userInfo?.email
  });

  const handleDelete = async (biodataId) => {

      await axiosSecure.delete(`/favourites/${userInfo.email}/${biodataId}`)
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
      <h2 className="text-2xl font-bold text-primary mb-6">My Favourite Biodatas</h2>

      {favourites.length === 0 ? (
        <p className="text-center text-white-500">You have no favourite biodatas.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Biodata ID</th>
                <th className="py-3 px-4 text-left">Permanent Address</th>
                <th className="py-3 px-4 text-left">Occupation</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {favourites.map((bio) => (
                <tr key={bio._id} className="border-t hover:bg-gray-50 transition">
                  <td className="py-3 px-4"><Link to={`/biodatadetails/${bio.biodataId}`}>{bio.name}</Link></td>
                  <td className="py-3 px-4">{bio.biodataId}</td>
                  <td className="py-3 px-4">{bio.permanentDivision}</td>
                  <td className="py-3 px-4">{bio.occupation}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleDelete(bio.biodataId)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition"
                    >
                      <FaTrashAlt />
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

export default MyFavouriteBiodataPage;
