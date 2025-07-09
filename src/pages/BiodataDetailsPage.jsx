import React, { use } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import LottiLoading from '../components/shared/LottiLoading';
import BioDataDetailsCard from '../components/BiodataDetails/BioDataDetailsCard';
import { useQuery } from '@tanstack/react-query';

const BiodataDetailsPage = () => {
  const { id } = useParams();
  const { userInfo } = use(AuthContext);

  const { data: biodata = {}, isLoading } = useQuery({
    queryKey: ['specific-biodata', id],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_URL}/biodata/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <LottiLoading />;
  }


  return (
    <div>
      <BioDataDetailsCard biodata={biodata} userInfo={userInfo} />
    </div>
  );
};

export default BiodataDetailsPage;
