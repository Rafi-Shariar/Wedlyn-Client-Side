import React, { use } from 'react';
import MyBiodata from './MyBiodata';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LottiLoading from '../../../components/shared/LottiLoading';
import { AuthContext } from '../../../context/AuthContext';
import { IoCreate } from "react-icons/io5";
import { Link } from 'react-router';

const ViewBiodataPage = () => {
  const { userInfo } = use(AuthContext);

  const { data: biodata = null, isLoading } = useQuery({
    queryKey: ['specific-biodata'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_URL}/mybiodata/${userInfo?.email}`);
      return res.data;
    },
    enabled: !!userInfo?.email
  });

  if (isLoading) return <LottiLoading />;

  return (
    <div>
      <h1 className='text-3xl font-semibold text-primary mb-6'>View Biodata</h1>

      {
        biodata ? (
          <MyBiodata biodata={biodata} />
        ) : (
          <div className='max-w-3xl mx-auto bg-gradient-to-bl from-sky-100 to-sky-400 text-center p-14 rounded-3xl shadow-2xl mt-20'>
            <h1 className='text-xl text-red-600 font-semibold'>You don't have a biodata yet!</h1>
            <h2 className="text-4xl font-bold mb-6 text-primary mt-4">
              <IoCreate className='inline mb-2'/> Create Your Biodata
            </h2>
            <div>
              <Link
                to={'/dashboard/viewbiodata/createbiodata'}
                className='bg-yellow-300 p-2 px-10 rounded-2xl font-semibold hover:bg-yellow-100'
              >
                Create
              </Link>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default ViewBiodataPage;
