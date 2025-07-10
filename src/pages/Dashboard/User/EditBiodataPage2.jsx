import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';
import LottiLoading from '../../../components/shared/LottiLoading';
import CreateBiodata from '../../../components/EditBiodata/CreateBiodata';

const EditBiodataPage2 = () => {

    const { userInfo, loading } = use(AuthContext);

    const { data: biodata, isLoading } = useQuery({
    queryKey: ["user-biodata", userInfo?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_URL}/biodata-by-email?email=${userInfo.email}`
      );
      return res.data;
    },
    enabled: !!userInfo?.email
  });

  if(isLoading) return <LottiLoading/>


    return (
        <div>
            {
                biodata? (<>Yes</>) : (<><CreateBiodata></CreateBiodata></>) 
            }
        </div>
    );
};

export default EditBiodataPage2;