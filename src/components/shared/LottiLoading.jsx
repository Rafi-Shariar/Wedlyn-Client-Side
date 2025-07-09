import React from 'react';
import Lottie from "lottie-react";
import lottieAnimation from '../../assets/lotties/Animation - 1752044842682.json';
const LottiLoading = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-white'>
             <Lottie animationData={lottieAnimation} loop={true} className="w-38 h-38"/>
        </div>
    );
};

export default LottiLoading;