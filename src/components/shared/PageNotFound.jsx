import React from 'react';
import IMG from '../../assets/PageNotFound.png';
import { Link } from 'react-router';
import { FaLongArrowAltLeft } from "react-icons/fa";
const PageNotFound = () => {
    return (
        <div>
            <div className=' w-[50%] mx-auto'>
                <img src={IMG} alt="" className=''/>
            </div>
            <div className='text-center border w-[200px] mx-auto py-2 rounded-2xl bg-purple-400 border-primary text-primary font-medium hover:bg-primary hover:text-white'>
                <Link to={'/'}><FaLongArrowAltLeft className='inline mr-2'/>Go Back Home</Link>
            </div>
        </div>
    );
};

export default PageNotFound;