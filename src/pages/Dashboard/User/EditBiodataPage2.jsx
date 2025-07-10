import { useQuery } from '@tanstack/react-query';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';
import LottiLoading from '../../../components/shared/LottiLoading';
import CreateBiodata from '../../../components/EditBiodata/CreateBiodata';
import EditExistingBiodata from './EditExistingBiodata';

const EditBiodataPage2 = () => {


    const { userInfo } = use(AuthContext);
    const [updated, setUpdated] = useState(false);

    const { data: biodata, isLoading, refetch } = useQuery({
    queryKey: ["user-biodata", userInfo?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_URL}/biodata-by-email?email=${userInfo.email}`
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
                biodata? (<><EditExistingBiodata biodata={biodata} setUpdated={setUpdated}></EditExistingBiodata></>) : (<><CreateBiodata></CreateBiodata></>) 
            }
        </div>
    );
};

export default EditBiodataPage2;