import { useQuery } from '@tanstack/react-query';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';
import LottiLoading from '../../../components/shared/LottiLoading';
import CreateBiodata from '../../../components/EditBiodata/CreateBiodata';
import EditExistingBiodata from './EditExistingBiodata';
import { Link } from 'react-router';
import { IoCreate } from 'react-icons/io5';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const EditBiodataPage2 = () => {

  const axiosSecure = useAxiosSecure();


    const { userInfo } = use(AuthContext);
    const [updated, setUpdated] = useState(false);

    const { data: biodata, isLoading, refetch } = useQuery({
    queryKey: ["user-biodata", userInfo?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/biodata-by-email?email=${userInfo.email}`
      );
      return res.data;
    },
    enabled: !!userInfo?.email
  });

  useEffect(()=>{

    if(updated){
      refetch();
      setUpdated(false);
    }
  },[updated])

  if(isLoading) return <LottiLoading/>


    return (
        <div>
            {
                biodata? (<><EditExistingBiodata biodata={biodata} setUpdated={setUpdated}></EditExistingBiodata></>) : (<>
                <div className='max-w-3xl mx-auto bg-gradient-to-bl from-sky-100 to-sky-400 text-center p-14 rounded-3xl shadow-2xl mt-20'>
            <h1 className='text-xl text-red-600 font-semibold'>You don't have a biodata yet !</h1>
            <h2 className="text-4xl font-bold mb-6 text-primary mt-4">
              <IoCreate className='inline mb-2'/>  Create Your Biodata
             </h2>

             <div>
                <Link to={'createbiodata'} className='bg-yellow-300 p-2 px-10 rounded-2xl font-semibold hover:bg-yellow-100'>Create</Link>
             </div>
        </div>
                
                </>) 
            }
        </div>
    );
};

export default EditBiodataPage2;