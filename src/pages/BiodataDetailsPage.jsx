import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import LottiLoading from '../components/shared/LottiLoading';
import BioDataDetailsCard from '../components/BiodataDetails/BioDataDetailsCard';


const BiodataDetailsPage = () => {
    const {id} = useParams();
    const{userInfo} = use(AuthContext);
    const [biodata, setBiodata] = useState({});
    const [currentLoading,setCurrentLoading] = useState(true);

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_URL}/biodata/${id}`)
        .then(res=>{
            
            setBiodata(res.data);
            setCurrentLoading(false);
        })
        .catch((error)=>{
            console.log('biodata details page',error);
        })
    },[])

    
    
    
    
    return (
        <div>
            {
                currentLoading? (<><LottiLoading></LottiLoading></>) : (<>
                <BioDataDetailsCard biodata={biodata} userInfo={userInfo}></BioDataDetailsCard>
                
                </>)
            }
            
            
        </div>
    );
};

export default BiodataDetailsPage;